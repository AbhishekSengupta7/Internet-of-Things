// Required steps to create a servient for a client
const { Servient, Helpers } = require("@node-wot/core");
const { HttpClientFactory } = require('@node-wot/binding-http');
const { CoapClientFactory } = require('@node-wot/binding-coap');

const servient = new Servient();
servient.addClientFactory(new CoapClientFactory(null));
servient.addClientFactory(new HttpClientFactory(null));

const WoTHelpers = new Helpers(servient);
let CONFIG = require('./Store_Config.json');

let arr = ["store_1","store_2","store_3","store_4"]; //name of stores initialized
let out_dict={"store_1":{},"store_2":{},"store_3":{},"store_4":{}};  //initialize output format
b=0 //initialized to make a final output on console and not on every iteration

for (let i=0; i<CONFIG.length; i++) //fetches each object //iterates from 0 to 4
{
for (let j=0; j<CONFIG[i].length; j++)  //goes inside objects
{

let coffee_mac_link = CONFIG[i][j];
WoTHelpers.fetch(coffee_mac_link).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            let thing = await WoT.consume(td);
        
            //while (1) {
            // Read machine state
            let state = await thing.readProperty("state");
            let title = thing.getThingDescription().title
            
            out_dict[arr[i]][title] = state;
            b=b+1

            
            //console.log(JSON.stringify(out_dict));
            //console.log(out_dict["store_4"])
            if (b===24){   //4 elemenst and each element has 6 other elements. hence 24.
                c=JSON.stringify(out_dict)
                console.log(c);
                

                let fs = require('fs');
                fs.writeFile("9_checkAllState.json", c, function(err, result) {
                if(err) console.log('error', err);
                });

                setTimeout(function(){ process.exit(0); }, 500);
            }
            
           // }

        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });

}}