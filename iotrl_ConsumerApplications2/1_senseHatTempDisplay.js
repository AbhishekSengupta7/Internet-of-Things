// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));



servient.addCredentials({
    "urn:dev:ops:32473-sensehat-003": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

const Machine = "https://esiremotelab.esi.ei.tum.de:8081/SenseHat3";

demo()

async function demo() {

     try{

        obj=await servient.start();
        var tdh1= await WoTHelpers.fetch(Machine);
        thing1= await obj.consume(tdh1);

        let temp = await thing1.readProperty("temperature");
        console.log(temp)

        
        
        thing1.invokeAction("showMessage",{"textString":String(temp).substring(0,4),"scrollSpeed":0.28,"textColour":[255,0,0]}); 
        setTimeout(function(){ thing1.invokeAction("clear"); }, 10000);
        setTimeout(function(){ process.exit(0); }, 10500);
     }
     catch (err) {
        console.error("Script error:", err);
    }

}












