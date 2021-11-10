// Required steps to create a servient for a client
const { Servient, Helpers } = require("@node-wot/core");
const { HttpsClientFactory } = require('@node-wot/binding-http');

const servient = new Servient();
servient.addClientFactory(new HttpsClientFactory(null));
const WoTHelpers = new Helpers(servient);


servient.addCredentials({
  "esi:pantilt:2": {
      username: "03736060",
      password: "ZSQcfwqeZRu0OFir"
  }
});


const Machine = "https://esiremotelab.esi.ei.tum.de:8081/PanTilt2";
WoTHelpers.fetch(Machine).then(async (td) => {
    try {
        servient.start().then(async (WoT) => {
            // Then from here on you can consume the thing

        let thing = await WoT.consume(td) 
        
        

        let temp = await thing.readProperty("panPosition");
        //console.log(temp)

        if (temp!=0)
        {
           thing.invokeAction("goHome")
        }

        else {

        }
        
        //await thing1.invokeAction("panContinuously")

        rotation_speed=11  //this is in angles per second
        await thing.invokeAction("panContinuously",rotation_speed); 



      
        async function position_obtained(){   //continuous polling 

        let temp1 =  await thing.readProperty("panPosition");
        //console.log(temp1);
        
        if (temp1>=45){
          
          await thing.invokeAction("stopMovement");
          let temp2 =  await thing.readProperty("panPosition");
          //console.log(temp2)
          a= await (temp2-temp1)
          time_taken= await a/rotation_speed    //angle/angle per second
          console.log("time taken when stop action request sent and action actually stops:  "+time_taken*1000  +"  milliseconds")
          
        }
         else {
          setTimeout(function(){ position_obtained(); }, 700);
             //polling implementation again after 0.7 seconds
         }    
      }

       
      
      setTimeout(function(){ position_obtained(); }, 500);
      //timer reset by delay function



      setTimeout(function(){ thing.invokeAction("goHome"); }, 8000);
      
      

        
        });
    }
    catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });