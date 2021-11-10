// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));



servient.addCredentials({
    "urn:dev:ops:32473-rainbowhat-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});



//initializing for trace logging file



const Machine = "https://esiremotelab.esi.ei.tum.de:8081/RainbowHAT1";

demo()
async function demo() {

     try{

        obj=await servient.start();

        var tdh1= await WoTHelpers.fetch(Machine);
        thing1= await obj.consume(tdh1);


        let led_Status = await thing1.readProperty("leds");
        console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        console.log(led_Status[0])
        
        //setting rainbow colors
        led_Status[0].colour=[255, 0, 0]  //rainbow colors colorswall.com/palette/102/
        led_Status[1].colour=[255, 165, 0]
        led_Status[2].colour=[255, 255, 0]
        led_Status[3].colour=[0, 128, 0]
        led_Status[4].colour=[0, 0, 255]
        led_Status[5].colour=[75, 0, 130]
        led_Status[6].colour=[238, 130, 238]

        setTimeout(function(){ console.log(led_Status[0]); }, 0001);

        //console.log(led_Status[0])
        //await thing1.writeProperty("leds",led_Status)

        setTimeout(function(){ thing1.writeProperty("leds",led_Status); }, 0002);
        
        //setTimeout(function(){ console.log(led_Status[0]); }, 0120);


        thing1.invokeAction("writeDisplay","RAIN");
        setTimeout(function(){ thing1.invokeAction("writeDisplay","BOW!"); }, 1000);
        setTimeout(function(){ thing1.invokeAction("writeDisplay","RAIN"); }, 2000);
        setTimeout(function(){ thing1.invokeAction("writeDisplay","BOW!"); }, 3000);
            

            //clearing the leds
        setTimeout(function(){ thing1.invokeAction("clearDisplay"); }, 4000);
        setTimeout(function(){ thing1.invokeAction("clearLEDs"); }, 4000);
        setTimeout(function(){ process.exit(0); }, 4050);
     }
     catch (err) {
        console.error("Script error:", err);
    }

}