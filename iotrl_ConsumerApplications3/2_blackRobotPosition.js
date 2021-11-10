// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));



servient.addCredentials({
    "urn:dev:ops:32473-UArm-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

const Machine = "https://esiremotelab.esi.ei.tum.de:8081/uarm";

demo()

async function demo() {

     try{

        obj=await servient.start();
        var tdh1= await WoTHelpers.fetch(Machine);
        thing1= await obj.consume(tdh1);

        
        thing1.invokeAction("goTo",{"x":195,"y":195,"z":80}); 
        
        
        setTimeout(function(){ thing1.invokeAction("goTo",{"x":200,"y":-200,"z":90}); }, 10000);
        setTimeout(function(){ thing1.invokeAction("goTo",{"x":200,"y":0,"z":60}); }, 20000);
        setTimeout(function(){ thing1.invokeAction("goTo",{"x":150,"y":0,"z":60}); }, 30000);
        

        setTimeout(function(){ process.exit(0); }, 40000);

     }
     catch (err) {
        console.error("Script error:", err);
    }

}










