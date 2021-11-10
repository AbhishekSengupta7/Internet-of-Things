// Required steps to create a servient for a client
const { Servient, Helpers } = require("@node-wot/core");
const { CoapClientFactory } = require('@node-wot/binding-coap');
const servient = new Servient();
servient.addClientFactory(new CoapClientFactory(null));
const WoTHelpers = new Helpers(servient);


//initializing for trace logging file
x=y=z=a=b=c=d=e=f=g=0
let trace_dict={"interactionCounter":x,"operation":y,"affordance":{"type":z,"name":a},
"payload":b,"recipient":{"type":c,"thingId":d,"thingTitle":e},"messageId":f,"timeStamp":g};



const Coffee_Machine = "coap://esiremotelab.esi.ei.tum.de:5683/Virtual-Coffee-Machine_2_1";
WoTHelpers.fetch(Coffee_Machine).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            let thing = await WoT.consume(td)  //the thing is consumed here
            var date_time = new Date();  //also needed for logging in all other codes
            var hour = date_time.getUTCHours();
            console.log("Present UTC time:", hour)


            if (hour===21){
                let response = await thing.invokeAction("shutdown");
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
                fs.writeFile(".\\CoAP Log files\\1_goodNight.result.json", c, function(err, result) {
                if(err) console.log('error', err);
                });

                //end of logging file  
                setTimeout(function(){ process.exit(0); }, 500); //interval added to complete 
                                                                 //printing of the output json file
                 //process.exit(0)
            
            }
            
            else {
                process.exit(0)
            }
        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });