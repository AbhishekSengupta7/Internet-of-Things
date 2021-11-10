// Required steps to create a servient for a client
Servient = require("@node-wot/core").Servient;
Helpers = require("@node-wot/core").Helpers;
HttpsClientFactory = require("@node-wot/binding-http").HttpsClientFactory;
WoT = require("@node-wot/core");
const servient = new Servient();
//const woTHelper =  new WoT.Helpers(servient);  //used if td fetched from https link
servient.addClientFactory(new HttpsClientFactory());
const WoTHelpers = new Helpers(servient);

servient.addCredentials({
    "urn:dev:ops:32473-UArm-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "de:tum:ei:esi:flora": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "ururn:dev:ops:32473-InfraredSensor-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "ururn:dev:ops:32473-InfraredSensor-002": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "de:tum:ei:esi:dobot": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "urn:dev:ops:32473-ConveyorBelt-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "urn:dev:ops:32473-ConveyorBelt-002": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});


const sensor1 = "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1";
const sensor2 = "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor2";
const robot= "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician";
const uarm = "https://esiremotelab.esi.ei.tum.de:8081/uarm";
const color= "https://esiremotelab.esi.ei.tum.de:8081/ColorSensor";
const convbelt1 = "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt1";
const convbelt2 = "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt2";


demo()

async function demo() {

     try{

        obj=await servient.start();

        var tdh1= await WoTHelpers.fetch(uarm);
        u_arm= await obj.consume(tdh1);

        var tdh2= await WoTHelpers.fetch(color);
        colorsensor= await obj.consume(tdh2);
        
        
        var tdh3= await WoTHelpers.fetch(sensor1);
        infrasensor1= await obj.consume(tdh3);

        var tdh7= await WoTHelpers.fetch(sensor2);
        infrasensor2= await obj.consume(tdh7);

        var tdh4= await WoTHelpers.fetch(robot);
        dobot= await obj.consume(tdh4); 

        var tdh5= await WoTHelpers.fetch(convbelt1);
        conv_belt1= await obj.consume(tdh5);

        var tdh6= await WoTHelpers.fetch(convbelt2);
        conv_belt2= await obj.consume(tdh6);      
        
        function delay(time) {
            var date1 = new Date();
            var date2 = new Date();
            while (date2.valueOf() < date1.valueOf() + time) {
              date2 = new Date();
            }
          }
        
        await dobot.invokeAction("getCube"); 
        await conv_belt2.invokeAction("startBeltForward");

        infrasensor2.subscribeEvent("detectedObject", async (eventData) => {
            try {
        
        
                console.log("eventData is ", await eventData);

                await conv_belt2.invokeAction("stopBelt");

                await u_arm.invokeAction("gripOpen");
                
                delay(10000)                 
                await u_arm.invokeAction("goTo", { "x":195,  "y":195,   "z":100});
                 
                delay(10000) 
                await u_arm.invokeAction("goTo", { "x":195,  "y":195,   "z":52});
                                  
                delay(10000)
                await u_arm.invokeAction("gripClose");
                
                delay(10000)
                await u_arm.invokeAction("goTo", { "x":195,  "y":195,   "z":100});

                delay(10000)
                await u_arm.invokeAction("goTo", { "x":200,  "y":-3,     "z":60}); //camera color
                
                delay(8000)
                let rgbcolor = await colorsensor.readProperty("color");
                console.log("rgbcolor:", rgbcolor);

                //convert rgb color to string value 
                //then delay according to received string color value
                //I put 3000 delay because i could not do rgb --> string conversion
		
                delay(3000)

                await u_arm.invokeAction("goTo", {"x":200,  "y":-200,  "z":90});
                
                delay(10000)
                await u_arm.invokeAction("goTo", { "x":200,  "y":-200,  "z":52});
                
                delay(10000)
                await u_arm.invokeAction("gripOpen");


                delay(10000)
                await u_arm.invokeAction("goTo", {"x":200,  "y":-200, "z":90});
                
            
                delay(5000)
                conv_belt1.invokeAction("startBeltForward");

                delay(0500)
                infrasensor1.subscribeEvent("detectedObject", async (eventData) => {
                try {


                    console.log("eventData is ", await eventData);

                    await conv_belt1.invokeAction("stopBelt");
            
                    await dobot.invokeAction("returnCube");

                } catch (error) {
                console.error("Error");
                console.error(error)
                }
            });
        } catch (error) {
        console.error("Error");
        console.error(error)
        }
        });
    }
     catch (err) {
        console.error("Script error:", err);
    }

}













