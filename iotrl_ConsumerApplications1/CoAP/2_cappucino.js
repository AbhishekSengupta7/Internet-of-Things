// Required steps to create a servient for a client
const { Servient, Helpers } = require("@node-wot/core");
const { CoapClientFactory } = require('@node-wot/binding-coap');

const servient = new Servient();
servient.addClientFactory(new CoapClientFactory(null));
const WoTHelpers = new Helpers(servient);

x=y=z=a=b=c=d=e=f=g=0
let trace_dict={"interactionCounter":x,"operation":y,"affordance":{"type":z,"name":a},
"payload":b,"recipient":{"type":c,"thingId":d,"thingTitle":e},"messageId":f,"timeStamp":g};

const Coffee_Machine_1_2 = "coap://esiremotelab.esi.ei.tum.de:5683/Virtual-Coffee-Machine_2_2";
WoTHelpers.fetch(Coffee_Machine_1_2).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            // Then from here on you can consume the thing
            let thing = await WoT.consume(td) 
            var date_time = new Date();
            let response = await thing.invokeAction("brew","cappuccino")
            console.log("response",response)


            //printing trace files and logging action

            trace_dict.operation="invokeaction";
            trace_dict.interactionCounter=1;
            trace_dict.affordance.type="action";
            trace_dict.affordance.name="action affordance";
            trace_dict.payload=response;
            trace_dict.recipient.type="thing";
            trace_dict.recipient.thingId=thing.getThingDescription().id;
            trace_dict.recipient.thingTitle=thing.getThingDescription().title;
            trace_dict.messageId=1;
            trace_dict.timeStamp=date_time
            console.log(trace_dict)
            c=JSON.stringify(trace_dict)
            console.log(c)


            var fs = require('fs');
            fs.writeFile(".\\CoAP Log files\\2_cappucino.result.json", c, function(err, result) {
            if(err) console.log('error', err);
            });

          //end of logging file  

          setTimeout(function(){ process.exit(0); }, 500);
            //process.exit(0)
        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });