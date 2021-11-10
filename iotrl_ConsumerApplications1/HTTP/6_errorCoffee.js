// Required steps to create a servient for a client
const { Servient, Helpers } = require("@node-wot/core");
const { HttpClientFactory } = require('@node-wot/binding-http');
const servient = new Servient();
servient.addClientFactory(new HttpClientFactory(null));
const WoTHelpers = new Helpers(servient);


//initializing for trace logging file
x=y=z=a=b=c=d=e=f=g=0
let trace_dict={"interactionCounter":x,"operation":y,"affordance":{"type":z,"name":a},
"payload":b,"recipient":{"type":c,"thingId":d,"thingTitle":e},"messageId":f,"timeStamp":g};



const Coffee_Machine_1_6 = "http://esiremotelab.esi.ei.tum.de:8080/Virtual-Coffee-Machine_1_6";
WoTHelpers.fetch(Coffee_Machine_1_6).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            let thing = await WoT.consume(td)  //the thing is consumed here


            let response_action = thing.invokeAction("brew","cappuccino");
            await thing.subscribeEvent("error", async (eventData) => {
                try {
                  
                  console.log("error: " + await eventData);
                  
                  
                } catch (error) {
                  console.error("Failed");
                  console.error(error)
                }
              });



            

            
            
            
        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });