// Required steps to create a servient for a client
const { Servient, Helpers } = require("@node-wot/core");
const { HttpClientFactory } = require('@node-wot/binding-http');
const { CoapClientFactory } = require('@node-wot/binding-coap');

const servient = new Servient();
servient.addClientFactory(new CoapClientFactory(null)); //choose http ans coap respectively based on tdlink
servient.addClientFactory(new HttpClientFactory(null));

const WoTHelpers = new Helpers(servient);
let CONFIG = require('./Store_Config.json');
for (let i=0; i<CONFIG.length; i++)  //fetch object
{
for (let j=0; j<CONFIG[i].length; j++)  //fetch content inside object
{

let coffee = CONFIG[i][j];
WoTHelpers.fetch(coffee).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            let thing = await WoT.consume(td);
        
            //while (1) {
            let today = new Date();
            let time = today.getUTCHours();

            if (time === 21 ) {
                console.log("time" + time);
                let response = await thing.invokeAction("shutdown");
                    //console.log("response", response);
                    //process.exit(0);
                }
           // }

        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });

}}