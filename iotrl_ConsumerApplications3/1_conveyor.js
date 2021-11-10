// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));



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

const Machine = "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt1";
const Machine1 = "https://esiremotelab.esi.ei.tum.de:8081/ConveyorBelt2"
demo()

async function demo() {

     try{

        obj=await servient.start();
        var tdh1= await WoTHelpers.fetch(Machine);
        thing1= await obj.consume(tdh1);

        var tdh2= await WoTHelpers.fetch(Machine1);
        thing2= await obj.consume(tdh2);


        
        thing1.invokeAction("startBeltForward"); 
        thing2.invokeAction("startBeltForward"); 

        
        setTimeout(function(){ thing1.invokeAction("stopBelt"); }, 5000);
        setTimeout(function(){ thing2.invokeAction("stopBelt"); }, 5000);

        setTimeout(function(){ thing1.invokeAction("startBeltBackward"); }, 10000);
        setTimeout(function(){ thing2.invokeAction("startBeltBackward"); }, 10000);

        setTimeout(function(){ thing1.invokeAction("stopBelt"); }, 15000);
        setTimeout(function(){ thing2.invokeAction("stopBelt"); }, 15000); 
        
        
        setTimeout(function(){ process.exit(0); }, 17000);
    
    }
     catch (err) {
        console.error("Script error:", err);
    }

}











