// Required steps to create a servient for a client
const { Servient, Helpers } = require("@node-wot/core");
const { CoapClientFactory } = require('@node-wot/binding-coap');



const servient = new Servient();
servient.addClientFactory(new CoapClientFactory(null));
const WoTHelpers = new Helpers(servient);


x=y=z=a=b=c=d=e=f=g=0
let trace_dict1={"interactionCounter":x,"operation":y,"affordance":{"type":z,"name":a},
"payload":b,"recipient":{"type":c,"thingId":d,"thingTitle":e},"messageId":f,"timeStamp":g};



x1=y1=z1=a1=b1=c1=d1=e1=f1=g1=0
let trace_dict2={"interactionCounter":x1,"operation":y1,"affordance":{"type":z1,"name":a1},
"payload":b1,"recipient":{"type":c1,"thingId":d1,"thingTitle":e1},"messageId":f1,"timeStamp":g1};




const Coffee_Machine_1_3 = "coap://esiremotelab.esi.ei.tum.de:5683/Virtual-Coffee-Machine_2_3";
WoTHelpers.fetch(Coffee_Machine_1_3).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            
            let thing = await WoT.consume(td) 
            var date_time1 = new Date();
            let current_state = await thing.readProperty("state");
            console.log("state:"+current_state)
            
            if (current_state==="Ready"){
                var date_time2 = new Date();   //=== used to check both variable name and value similarity 
            
                let response = await thing.invokeAction("brew","espresso")
            
                console.log("response",response)

                trace_dict1.operation="readproperty";
                trace_dict1.interactionCounter=1;
                trace_dict1.affordance.type="property";
                trace_dict1.affordance.name="property affordance";
                trace_dict1.payload="Ready";
                trace_dict1.recipient.type="thing";
                trace_dict1.recipient.thingId=thing.getThingDescription().id;
                trace_dict1.recipient.thingTitle=thing.getThingDescription().title;
                trace_dict1.messageId=1;
                trace_dict1.timeStamp=date_time1
                //console.log(trace_dict1)
                j=trace_dict1
                console.log(j)

                
                
                trace_dict2.operation="invokeaction";
                trace_dict2.interactionCounter=2;
                trace_dict2.affordance.type="action";
                trace_dict2.affordance.name="action affordance";
                trace_dict2.payload=response;
                trace_dict2.recipient.type="thing";
                trace_dict2.recipient.thingId=thing.getThingDescription().id;
                trace_dict2.recipient.thingTitle=thing.getThingDescription().title;
                trace_dict2.messageId=2;
                trace_dict2.timeStamp=date_time2
                //console.log(trace_dict2)
                k=trace_dict2
                console.log(k)
                
                arr1=[j,k]

                //console.log(JSON.stringify(arr1))

                setTimeout(function(){var fs = require('fs');
                fs.writeFile(".\\CoAP Log files\\3_checkEspresso1.result.json", JSON.stringify(arr1), function(err, result) {
                if(err) console.log('error', err);
                });},500);
                           
               
                
                //process.exit(0)
                setTimeout(function(){ process.exit(0); }, 700);
            
            }
            
            
            else{
                    process.exit(0)
                    }
            
        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });