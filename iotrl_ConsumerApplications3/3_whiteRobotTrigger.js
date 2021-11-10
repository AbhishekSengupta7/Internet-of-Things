// Required steps to create a servient for a client

Servient = require("@node-wot/core").Servient;
Helpers = require("@node-wot/core").Helpers;
HttpsClientFactory = require("@node-wot/binding-http").HttpsClientFactory;
WoT = require("@node-wot/core");
const servient = new Servient();
const woTHelper =  new WoT.Helpers(servient);  //used if td fetched from https link
servient.addClientFactory(new HttpsClientFactory());

servient.addCredentials({
    "ururn:dev:ops:32473-InfraredSensor-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});
servient.addCredentials({
    "de:tum:ei:esi:dobot": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

const tdh1 = {
    "@context": [
      "https://www.w3.org/2019/wot/td/v1",
      {
        "@language": "en"
      }
    ],
    "actions": {
      "calibrateDevice": {
        "description": "Return to the start position, which is in the middle of the linear track.",
        "forms": [
          {
            "contentType": "application/json",
            "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/calibrateDevice",
            "op": "invokeaction"
          }
        ],
        "idempotent": true,
        "safe": false,
        "synchronous": false,
        "title": "Recalibrate the device and then return to the start position in the middle of the rail. This can be invoked if the device does not reach the pre-defined positons accuaretly"
      },
      "getCube": {
        "description": "Get a cube from the warehouse queue and put it on the second conyevor belt, then pushes the queue. Response is sent as soon as the request is received.",
        "forms": [
          {
            "contentType": "application/json",
            "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/getCube",
            "op": "invokeaction"
          }
        ],
        "idempotent": true,
        "safe": false,
        "synchronous": false,
        "title": "Get cube from warehouse queue"
      },
      "returnCube": {
        "description": "Return a cube from the first conveyor belt to the warehouse queue. Response is sent as soon as the request is received.",
        "forms": [
          {
            "contentType": "application/json",
            "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/actions/returnCube",
            "op": "invokeaction"
          }
        ],
        "idempotent": true,
        "safe": false,
        "synchronous": false,
        "title": "Return cube to warehouse queue"
      }
    },
    "description": "A robot arm that is responsible for getting cubes from the warehouse and retrieving them to the warehouse. The arm can only perform one 'actioninvoke' at a time and any further 'actioninvoke' requests up to a maximum of 3 are queued.",
    "id": "de:tum:ei:esi:dobot",
    "properties": {
      "position": {
        "description": "Get position of the robot arm's end effector relative to its home position. Returns an object containing the linear track positon 'l', as well as x, y, z positions and rotation of the end effector.",
        "forms": [
          {
            "contentType": "application/json",
            "href": "https://esiremotelab.esi.ei.tum.de:8081/DobotMagician/properties/position",
            "op": [
              "readproperty"
            ]
          }
        ],
        "properties": {
          "l": {
            "maximum": 900,
            "minimum": 0,
            "type": "number"
          },
          "r": {
            "type": "number"
          },
          "x": {
            "type": "number"
          },
          "y": {
            "type": "number"
          },
          "z": {
            "type": "number"
          }
        },
        "readOnly": true,
        "title": "The position of the robot arm's end effector.",
        "type": "object"
      }
    },
    "security": "basic_sc",
    "securityDefinitions": {
      "basic_sc": {
        "in": "header",
        "scheme": "basic"
      }
    },
    "title": "Warehouse Dobot"
}

const tdh2 = {
    "@context": [
      "https://www.w3.org/2019/wot/td/v1",
      {
        "@language": "en"
      }
    ],
    "@type": "",
    "description": "Infrared sensor for the detection of objects",
    "events": {
      "detectedObject": {
        "data": {
          "type": "boolean"
        },
        "description": "Detects the rising edge of the signal of the infrared sensor.",
        "forms": [
          {
            "contentType": "application/json",
            "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/events/detectedObject",
            "op": [
              "subscribeevent"
            ],
            "subprotocol": "longpoll"
          }
        ],
        "title": "Object detected"
      }
    },
    "forms": [
      {
        "contentType": "application/json",
        "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/all/properties",
        "op": [
          "writeallproperties",
          "writemultipleproperties"
        ]
      }
    ],
    "id": "urn:dev:ops:32473-InfraredSensor-001",
    "properties": {
      "objectPresence": {
        "description": "Reads the infrared sensor; 0: no object in front; 1: object in front.",
        "forms": [
          {
            "contentType": "application/json",
            "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/properties/objectPresence",
            "op": [
              "readproperty",
              "writeproperty"
            ]
          },
          {
            "contentType": "application/json",
            "href": "https://esiremotelab.esi.ei.tum.de:8081/InfraredSensor1/properties/objectPresence/observable",
            "op": [
              "observeproperty"
            ],
            "subprotocol": "longpoll"
          }
        ],
        "observable": true,
        "readOnly": false,
        "title": "Read infrared sensor",
        "type": "boolean",
        "writeOnly": false
      }
    },
    "security": "basic_sc",
    "securityDefinitions": {
      "basic_sc": {
        "in": "header",
        "scheme": "basic"
      }
    },
    "title": "InfraredSensor1"
}

demo();
async function demo() {

    try {
      
      obj=await servient.start();
      dobot = await obj.consume(tdh1);
      irsensor = await obj.consume(tdh2);

      irsensor.subscribeEvent("detectedObject", async (EventData) => {
            try {

                console.log("Data value is ", EventData);

            } catch (error) {
            console.error("Event reading failed");
            console.error(error)
            }
       });


        await dobot.invokeAction("returnCube");

    }
    catch (err) {
        console.error("Error:", err);
    }

}

