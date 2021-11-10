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
  "title": "myAmazingThing",
  "description": "My smart smoke detector",
  "securityDefinitions": {
    "nosec_sc": {
      "scheme": "nosec"
    }
  },
  "security": "nosec_sc",
  "@type": "",
  "id": "urn:dev:ops:myAmazingThing-001",
  "actions": {
    "startbuzzer": {
      "title": "Starts the buzzer based on the level of smoke detected",
      "description": "Starts the buzzer. Takes no input or delivers output",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myAmazingThing/startbuzzer",
          "htv:methodName": "POST",
          "op": [
            "invokeaction"
          ]
        }
      ],
      "idempotent": false,
      "safe": false
    },
    "stopbuzzer": {
      "title": "Stops the buzzer based on the level of smoke detected",
      "description": "Stops the buzzer. Takes no input or delivers output",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myAmazingThing/stopbuzzer",
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
    "roomtemperature": {
      "title": "temperature",
      "description": "This is a number which gives an insight into the room temperature",
      "minimum": -100.0,
      "maximum": 200.0,
      "observable": false,
      "readOnly": true,
      "type": "number",
      "unit": "Celsius",
      "writeOnly": false,
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myAmazingThing/roomtemperature",
          "op": [
            "readproperty"
          ]
        }
      ]
    },
    "carbonlevel": {
      "title": "level of C02 in the room-air",
      "description": "This is a number which represents percentage of carbondioxide in the room-air",
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
          "href": "http://localhost:8080/myAmazingThing/carbonlevel",
          "op": [
            "readproperty",
            "observeproperty"
          ]
        }
      ]
    },
    "oxygenlevel": {
      "title": "level of 02 in the room-air",
      "description": "This is a number which represents percentage of carbondioxide in the room-air",
      "maximum": 100.0,
      "minimum": 0.0,
      "observable": false,
      "readOnly": true,
      "type": "number",
      "unit": "%",
      "writeOnly": false,
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myAmazingThing/oxygenlevel",
          "op": [
            "readproperty"
          ]
        }
      ]
    }
  },
  "events": {
    "toohighcarbondioxide": {
      "title": "event when the carbondioxide level in the room-air is too high",
      "description": "fired when the carbondioxide crosses a threshold value",
      "forms": [
        {
          "contentType": "application/json",
          "href": "http://localhost:8080/myAmazingThing/toohighcarbondioxide",
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

