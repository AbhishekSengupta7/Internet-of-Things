// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));



servient.addCredentials({
    "urn:dev:ops:32473-UnicornpHAT-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});



//initializing for trace logging file



const Machine = "https://esiremotelab.esi.ei.tum.de:8081/UnicornPHAT1";

demo()
async function demo() {

     try{

        obj=await servient.start();

        var tdh1= await WoTHelpers.fetch(Machine);
        thing1= await obj.consume(tdh1);



        
        await thing1.invokeAction("fillRandom");

        

        let pixel_Status = await thing1.readProperty("pixels");
        console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        console.log(pixel_Status)
        console.log(pixel_Status[7]) 

        setTimeout(function(){pixel_Status[7]=65280 ; }, 2000);
        setTimeout(function(){console.log(pixel_Status) ; }, 2100);
        
        //await pixel_Status[7]= 316098
        //gives rgb values of the pixels

        //setTimeout(function(){ thing1.invokeAction("fillColor","green"); }, 5000);
        //obtain value for green color of pixels

        setTimeout(function(){ thing1.writeProperty("pixels",pixel_Status); }, 3000);


        setTimeout(function(){ thing1.invokeAction("fillColor",[0,0,0]);; }, 4000);

        setTimeout(function(){ process.exit(0); }, 4500);



        
        //setTimeout(function(){ thing1.invokeAction("fillColor",pixel_Status[7]); }, 1000);
        //thing1.invokeAction("fillColor","green");




     }
     catch (err) {
        console.error("Script error:", err);
    }

}