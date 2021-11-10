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


x2=y2=z2=a2=b2=c2=d2=e2=f2=g2=0
let trace_dict3={"interactionCounter":x2,"operation":y2,"affordance":{"type":z2,"name":a2},
"payload":b2,"recipient":{"type":c2,"thingId":d2,"thingTitle":e2},"messageId":f2,"timeStamp":g2};



x3=y3=z3=a3=b3=c3=d3=e3=f3=g3=0
let trace_dict4={"interactionCounter":x3,"operation":y3,"affordance":{"type":z3,"name":a3},
"payload":b3,"recipient":{"type":c3,"thingId":d3,"thingTitle":e3},"messageId":f3,"timeStamp":g3};



const Coffee_Machine = "coap://esiremotelab.esi.ei.tum.de:5683/Virtual-Coffee-Machine_2_4";
WoTHelpers.fetch(Coffee_Machine).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            
            let thing = await WoT.consume(td)
            var date_time1 = new Date();
            let bin_Status = await thing.readProperty("binStatus")
            var date_time2 = new Date();
            let water_Status = await thing.readProperty("waterStatus");
            var date_time3 = new Date();
            let coffee_Status = await thing.readProperty("coffeeStatus");

            
          
            console.log("bin_Status: "+ bin_Status);
            console.log("water_Status: "+ water_Status);
            console.log("coffee_Status: "+ coffee_Status);
            

            if (bin_Status<=80 && water_Status>10 && coffee_Status>10) {
                var date_time4 = new Date();
                let response = await thing.invokeAction("brew", "espresso");
                console.log("response", response);

                trace_dict1.operation="readproperty";
                trace_dict1.interactionCounter=1;
                trace_dict1.affordance.type="property";
                trace_dict1.affordance.name="property affordance";
                trace_dict1.payload=bin_Status;
                trace_dict1.recipient.type="thing";
                trace_dict1.recipient.thingId=thing.getThingDescription().id;
                trace_dict1.recipient.thingTitle=thing.getThingDescription().title;
                trace_dict1.messageId=1;
                trace_dict1.timeStamp=date_time1
                //console.log(trace_dict1)
                j=trace_dict1
                trace_dict2.operation="readproperty";
                trace_dict2.interactionCounter=2;
                trace_dict2.affordance.type="property";
                trace_dict2.affordance.name="property affordance";
                trace_dict2.payload=water_Status;
                trace_dict2.recipient.type="thing";
                trace_dict2.recipient.thingId=thing.getThingDescription().id;
                trace_dict2.recipient.thingTitle=thing.getThingDescription().title;
                trace_dict2.messageId=2;
                trace_dict2.timeStamp=date_time2
                //console.log(trace_dict2)
                k=trace_dict2
                trace_dict3.operation="readproperty";
                trace_dict3.interactionCounter=3;
                trace_dict3.affordance.type="property";
                trace_dict3.affordance.name="property affordance";
                trace_dict3.payload=coffee_Status;
                trace_dict3.recipient.type="thing";
                trace_dict3.recipient.thingId=thing.getThingDescription().id;
                trace_dict3.recipient.thingTitle=thing.getThingDescription().title;
                trace_dict3.messageId=3;
                trace_dict3.timeStamp=date_time3
                l=trace_dict3
                trace_dict4.operation="invokeaction";
                trace_dict4.interactionCounter=4;
                trace_dict4.affordance.type="action";
                trace_dict4.affordance.name="action affordance";
                trace_dict4.payload=response;
                trace_dict4.recipient.type="thing";
                trace_dict4.recipient.thingId=thing.getThingDescription().id;
                trace_dict4.recipient.thingTitle=thing.getThingDescription().title;
                trace_dict4.messageId=4;
                trace_dict4.timeStamp=date_time4;
                m=trace_dict4

                arr_final=[j,k,l,m]
                
                setTimeout(function(){var fs = require('fs');
                fs.writeFile(".\\CoAP Log files\\4_checkCoffee.result.json", JSON.stringify(arr_final), function(err, result) {
                if(err) console.log('error', err);
                });},500);
                    

                setTimeout(function(){ process.exit(0); }, 700);
                //process.exit(0)
            }
            else{
                console.log("Atleast one of the conditions unsatisfied")
                process.exit(0)
            }

        });
    }   
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });