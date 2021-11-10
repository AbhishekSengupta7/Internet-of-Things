// Required steps to create a servient for a client

Servient = require("@node-wot/core").Servient;
Helpers = require("@node-wot/core").Helpers;
HttpsClientFactory = require("@node-wot/binding-http").HttpsClientFactory;
WoT = require("@node-wot/core");
const servient = new Servient();
const woTHelper =  new WoT.Helpers(servient);  //used if td fetched from https link
servient.addClientFactory(new HttpsClientFactory());

//---------------------------------------


//all affordances of the TD added within the WoT.produce method
WoT.produce({
  "@context": "https://www.w3.org/2019/wot/td/v1",
  "title": "myGardenThing",
  "description": "Garden watering prediction thing",
  "securityDefinitions": {
    "nosec_sc": {
      "scheme": "nosec"
    }
  },
  "security": "nosec_sc",
  "@type": "",
  "id": "urn:dev:ops:Mything-001",
  "actions": {
    "startSprinkler": {
      "title": "Start sprinkler",
      "description": "Starts the sprinkler. Takes no input or delivers output",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/startSprinkler",
          "htv:methodName": "POST",
          "op": [
            "invokeaction"
          ]
        }
      ],
      "idempotent": false,
      "safe": false
    },
    "stopSprinkler": {
      "title": "Stop sprinkler",
      "description": "Stops the sprinkler. Takes no input or delivers output",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/stopSprinkler",
          "htv:methodName": "POST",
          "op": [
            "invokeaction"
          ]
        }
      ],
      "idempotent": false,
      "safe": false
    }
  },
  "properties": {
    "temperature": {
      "title": "temperature",
      "description": "This is a number value between -20 and 60 Celcius that follows a periodic curve with a period of 1 day",
      "minimum": -20.0,
      "maximum": 60.0,
      "observable": false,
      "readOnly": true,
      "type": "number",
      "unit": "Celcius",
      "writeOnly": false,
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/temperature",
          "op": [
            "readproperty"
          ]
        }
      ]
    },
    "soilHumidity": {
      "title": "soilHumidity",
      "description": "This is a number value with a unit of percentage between 0 and 100",
      "maximum": 100.0,
      "minimum": 0.0,
      "observable": true,
      "readOnly": true,
      "type": "number",
      "unit": "%",
      "writeOnly": false,
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/soilHumidity",
          "op": [
            "readproperty",
            "observeproperty"
          ]
        }
      ]
    },
    "humidityThreshold": {
      "title": "humidityThreshold",
      "description": "This sets the threshold when the watering starts automatically",
      "maximum": 100.0,
      "minimum": 0.0,
      "observable": false,
      "readOnly": false,
      "type": "number",
      "unit": "%",
      "writeOnly": false,
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/humidityThreshold",
          "op": [
            "readproperty",
            "writeproperty"
          ]
        }
      ]
    },
    "state": {
      "description": "state",
      "title": "This is a string value that can be set to manualWatering or automaticWatering.",
      "readOnly": false,
      "writeOnly": false,
      "type": "string",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/state",
          "op": [
            "readproperty",
            "writeproperty"
          ]
        }
      ],
      "enum": [
        "manualWatering",
        "automaticWatering"
      ]
    }
  },
  "events": {
    "tooDry": {
      "title": "Too dry event",
      "description": "fired when the humidity reaches the set humidityThreshold",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/tooDry",
          "op": [
            "subscribeevent"
          ],
          "subprotocol": "longpoll"
        }
      ]
    },
    "tooWet": {
      "title": "Too wet event",
      "description": "fired when the humidity reaches 90 percent",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myGardenThing/tooWet",
          "op": [
            "subscribeevent"
          ],
          "subprotocol": "longpoll"
        }
      ]
    }
  }
})


.then( (thing) => {


})

function websitecall()
{     https = require('https');
      https.get('https://api.weatherbit.io/v2.0/current?lat=48.1403&lon=11.5600&key=74210cb466f7415d87cd0a2ee9bbfccc', (response) => {
      //latitude and longitude of munich central station
      
      let receiveddata = '';
      response.on('data', (datachunk) => {
        receiveddata = receiveddata + datachunk;
      });
      response.on('end', () => {
        console.log(JSON.parse(receiveddata));
        console.log(typeof(receiveddata))
      });

    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
}
