// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));



servient.addCredentials({
    "urn:dev:ops:32473-rainbowhat-001": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "urn:dev:ops:32473-rainbowhat-002": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
    "urn:dev:ops:32473-HueIndoorSensor-1": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});
servient.addCredentials({
    "urn:dev:ops:32473-HueIndoorSensor-2": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});


hue_td={
    "@context": [
    "https://www.w3.org/2019/wot/td/v1",
    {
    "@language": "en"
    }
    ],
    "title": "Hue Indoor Sensor 1",
    "id": "urn:dev:ops:32473-HueIndoorSensor-1",
    "security": "basic_sc",
    "securityDefinitions": {
    "basic_sc": {
    "scheme": "basic",
    "in": "header"
    }
    },
    "base": "https://esiremotelab.esi.ei.tum.de:8081/LabLocal/api/17AvYQeLM2T8Z3r0e3BiEvb9Qdwt36yU2BudTxrn/sensors/",
    "description": "Hue Sensor for indoor applications that can measure temperature, light level and presence of motion",
    "properties": {
    "lightInformation": {
    "title": "Light Information",
    "description": "State, config and other metadata about the light levels",
    "type": "object",
    "readOnly": true,
    "writeOnly": false,
    "properties": {
    "state": {
    "type": "object",
    "properties": {
    "lightlevel": {
    "type": "integer",
    "description": "Light level that sensed by sensor",
    "minimum": 0,
    "maximum": 65535
    },
    "dark": {
    "type": "boolean",
    "description": "Indicates if sensor is in dark"
    },
    "daylight": {
    "type": "boolean",
    "description": "Indicates if sensor gets daylight"
    },
    "lastupdated": {
    "type": "date-time",
    "description": "Last update date of the sensor"
    }
    }
    },
    "swupdate": {
    "type": "object"
    },
    "config": {
    "type": "object",
    "description": "The configuration object with attributes corresponding to the sensor type. Attribute values represents configuration information.",
    "properties": {
    "on": {
    "type": "boolean",
    "description": "Turns the sensor on/off. When off, state changes of the sensor are not reflected in the sensor resource."
    },
    "reachable": {
    "type": "boolean",
    "description": "Indicates whether communication with devices is possible. CLIP Sensors do not yet support reachable verification. Mandatory for all Sensors except ZGPSwitch, Daylight"
    },
    "battery": {
    "type": "integer",
    "description": "The current battery state in percent, only for battery powered devices. Not present when not provided on creation (CLIP sensors)."
    }
    }
    },
    "name": {
    "type": "string",
    "description": "The human readable name of the sensor, can be changed by the user."
    },
    "type": {
    "type": "string",
    "description": "Type name of the sensor"
    },
    "modelid": {
    "type": "string",
    "description": "This parameter uniquely identifies the hardware model of the device for the given manufaturer."
    },
    "manufacturername": {
    "type": "string",
    "description": "The name of the device manufacturer."
    },
    "productname": {
    "type": "string"
    },
    "swversion": {
    "type": "string",
    "description": "This parameter uniquely identifies the software version running in the hardware."
    },
    "uniqueid": {
    "type": "string",
    "description": "Unique id of the sensor. Should be the MAC address of the device."
    },
    "capabilities": {
    "type": "object"
    }
    },
    "forms": [
    {
    "href": "11",
    "contentType": "application/json",
    "op": [
    "readproperty"
    ]
    }
    ]
    },
    "temperature": {
    "title": "Temperature",
    "description": "State, config and other metadata about the temperature",
    "type": "object",
    "readOnly": true,
    "writeOnly": false,
    "properties": {
    "state": {
    "type": "object",
    "properties": {
    "temperature": {
    "type": "integer",
    "description": "Measured mperature in Celcius * 100"
    },
    "lastupdated": {
    "type": "string",
    "format": "date-time",
    "description": "Last update date of the sensor"
    }
    }
    },
    "config": {
    "type": "object",
    "description": "The configuration object with attributes corresponding to the sensor type. Attribute values represents configuration information.",
    "properties": {
    "on": {
    "type": "boolean",
    "description": "Turns the sensor on/off. When off, state changes of the sensor are not reflected in the sensor resource."
    },
    "reachable": {
    "type": "boolean",
    "description": "Indicates whether communication with devices is possible. CLIP Sensors do not yet support reachable verification. Mandatory for all Sensors except ZGPSwitch, Daylight"
    },
    "battery": {
    "type": "integer",
    "description": "The current battery state in percent, only for battery powered devices. Not present when not provided on creation (CLIP sensors)."
    }
    }
    },
    "name": {
    "type": "string",
    "description": "The human readable name of the sensor, can be changed by the user."
    },
    "type": {
    "type": "string",
    "description": "Type name of the sensor"
    },
    "modelid": {
    "type": "string",
    "description": "This parameter uniquely identifies the hardware model of the device for the given manufaturer."
    },
    "manufacturername": {
    "type": "string",
    "description": "The name of the device manufacturer."
    },
    "productname": {
    "type": "string"
    },
    "swversion": {
    "type": "string",
    "description": "This parameter uniquely identifies the software version running in the hardware."
    },
    "uniqueid": {
    "type": "string",
    "description": "Unique id of the sensor. Should be the MAC address of the device."
    },
    "capabilities": {
    "type": "object"
    }
    },
    "forms": [
    {
    "href": "12",
    "contentType": "application/json",
    "op": [
    "readproperty"
    ]
    }
    ]
    },
    "motion": {
    "title": "Motion",
    "description": "State, config and other metadata about the motion detected",
    "type": "object",
    "readOnly": true,
    "writeOnly": false,
    "properties": {
    "state": {
    "type": "object",
    "properties": {
    "presence": {
    "type": "boolean",
    "description": "Indicates if presence sensor is triggered"
    },
    "lastupdated": {
    "type": "string",
    "format": "date-time",
    "description": "Last update date of the sensor"
    }
    }
    },
    "swupdate": {
    "type": "object"
    },
    "config": {
    "type": "object",
    "description": "The configuration object with attributes corresponding to the sensor type. Attribute values represents configuration information.",
    "properties": {
    "on": {
    "type": "boolean",
    "description": "Turns the sensor on/off. When off, state changes of the sensor are not reflected in the sensor resource."
    },
    "reachable": {
    "type": "boolean",
    "description": "Indicates whether communication with devices is possible. CLIP Sensors do not yet support reachable verification. Mandatory for all Sensors except ZGPSwitch, Daylight"
    },
    "battery": {
    "type": "integer",
    "description": "The current battery state in percent, only for battery powered devices. Not present when not provided on creation (CLIP sensors)."
    }
    }
    },
    "name": {
    "type": "string",
    "description": "The human readable name of the sensor, can be changed by the user."
    },
    "type": {
    "type": "string",
    "description": "Type name of the sensor"
    },
    "modelid": {
    "type": "string",
    "description": "This parameter uniquely identifies the hardware model of the device for the given manufaturer."
    },
    "manufacturername": {
    "type": "string",
    "description": "The name of the device manufacturer."
    },
    "productname": {
    "type": "string"
    },
    "swversion": {
    "type": "string",
    "description": "This parameter uniquely identifies the software version running in the hardware."
    },
    "uniqueid": {
    "type": "string",
    "description": "Unique id of the sensor. Should be the MAC address of the device."
    },
    "capabilities": {
    "type": "object"
    }
    },
    "forms": [
    {
    "href": "10",
    "contentType": "application/json",
    "op": [
    "readproperty"
    ]
    }
    ]
    }
    }
    }

hue_td2={
    "@context": [
      "https://www.w3.org/2019/wot/td/v1",
      {
        "@language": "en"
      }
    ],
    "title": "Hue Indoor Sensor 2",
    "id": "urn:dev:ops:32473-HueIndoorSensor-2",
    "security": "basic_sc",
    "securityDefinitions": {
      "basic_sc": {
        "scheme": "basic",
        "in": "header"
      }
    },
    "base": "https://esiremotelab.esi.ei.tum.de:8081/LabLocal/api/17AvYQeLM2T8Z3r0e3BiEvb9Qdwt36yU2BudTxrn/sensors/",
    "description": "Hue Sensor for indoor applications that can measure temperature, light level and presence of motion",
    "properties": {
      "lightInformation": {
        "title": "Light Information",
        "description": "State, config and other metadata about the light levels",
        "type": "object",
        "readOnly": true,
        "writeOnly": false,
        "properties": {
          "state": {
            "type": "object",
            "properties": {
              "lightlevel": {
                "type": "integer",
                "description": "Light level that sensed by sensor",
                "minimum": 0,
                "maximum": 65535
              },
              "dark": {
                "type": "boolean",
                "description": "Indicates if sensor is in dark"
              },
              "daylight": {
                "type": "boolean",
                "description": "Indicates if sensor gets daylight"
              },
              "lastupdated": {
                "type": "date-time",
                "description": "Last update date of the sensor"
              }
            }
          },
          "swupdate": {
            "type": "object"
          },
          "config": {
            "type": "object",
            "description": "The configuration object with attributes corresponding to the sensor type. Attribute values represents configuration information.",
            "properties": {
              "on": {
                "type": "boolean",
                "description": "Turns the sensor on/off. When off, state changes of the sensor are not reflected in the sensor resource."
              },
              "reachable": {
                "type": "boolean",
                "description": "Indicates whether communication with devices is possible. CLIP Sensors do not yet support reachable verification. Mandatory for all Sensors except ZGPSwitch, Daylight"
              },
              "battery": {
                "type": "integer",
                "description": "The current battery state in percent, only for battery powered devices. Not present when not provided on creation (CLIP sensors)."
              }
            }
          },
          "name": {
            "type": "string",
            "description": "The human readable name of the sensor, can be changed by the user."
          },
          "type": {
            "type": "string",
            "description": "Type name of the sensor"
          },
          "modelid": {
            "type": "string",
            "description": "This parameter uniquely identifies the hardware model of the device for the given manufaturer."
          },
          "manufacturername": {
            "type": "string",
            "description": "The name of the device manufacturer."
          },
          "productname": {
            "type": "string"
          },
          "swversion": {
            "type": "string",
            "description": "This parameter uniquely identifies the software version running in the hardware."
          },
          "uniqueid": {
            "type": "string",
            "description": "Unique id of the sensor. Should be the MAC address of the device."
          },
          "capabilities": {
            "type": "object"
          }
        },
        "forms": [
          {
            "href": "16",
            "contentType": "application/json",
            "op": [
              "readproperty"
            ]
          }
        ]
      },
      "temperature": {
        "title": "Temperature",
        "description": "State, config and other metadata about the temperature",
        "type": "object",
        "readOnly": true,
        "writeOnly": false,
        "properties": {
          "state": {
            "type": "object",
            "properties": {
              "temperature": {
                "type": "integer",
                "description": "Measured mperature in Celcius * 100"
              },
              "lastupdated": {
                "type": "string",
                "format": "date-time",
                "description": "Last update date of the sensor"
              }
            }
          },
          "config": {
            "type": "object",
            "description": "The configuration object with attributes corresponding to the sensor type. Attribute values represents configuration information.",
            "properties": {
              "on": {
                "type": "boolean",
                "description": "Turns the sensor on/off. When off, state changes of the sensor are not reflected in the sensor resource."
              },
              "reachable": {
                "type": "boolean",
                "description": "Indicates whether communication with devices is possible. CLIP Sensors do not yet support reachable verification. Mandatory for all Sensors except ZGPSwitch, Daylight"
              },
              "battery": {
                "type": "integer",
                "description": "The current battery state in percent, only for battery powered devices. Not present when not provided on creation (CLIP sensors)."
              }
            }
          },
          "name": {
            "type": "string",
            "description": "The human readable name of the sensor, can be changed by the user."
          },
          "type": {
            "type": "string",
            "description": "Type name of the sensor"
          },
          "modelid": {
            "type": "string",
            "description": "This parameter uniquely identifies the hardware model of the device for the given manufaturer."
          },
          "manufacturername": {
            "type": "string",
            "description": "The name of the device manufacturer."
          },
          "productname": {
            "type": "string"
          },
          "swversion": {
            "type": "string",
            "description": "This parameter uniquely identifies the software version running in the hardware."
          },
          "uniqueid": {
            "type": "string",
            "description": "Unique id of the sensor. Should be the MAC address of the device."
          },
          "capabilities": {
            "type": "object"
          }
        },
        "forms": [
          {
            "href": "17",
            "contentType": "application/json",
            "op": [
              "readproperty"
            ]
          }
        ]
      },
      "motion": {
        "title": "Motion",
        "description": "State, config and other metadata about the motion detected",
        "type": "object",
        "readOnly": true,
        "writeOnly": false,
        "properties": {
          "state": {
            "type": "object",
            "properties": {
              "presence": {
                "type": "boolean",
                "description": "Indicates if presence sensor is triggered"
              },
              "lastupdated": {
                "type": "string",
                "format": "date-time",
                "description": "Last update date of the sensor"
              }
            }
          },
          "swupdate": {
            "type": "object"
          },
          "config": {
            "type": "object",
            "description": "The configuration object with attributes corresponding to the sensor type. Attribute values represents configuration information.",
            "properties": {
              "on": {
                "type": "boolean",
                "description": "Turns the sensor on/off. When off, state changes of the sensor are not reflected in the sensor resource."
              },
              "reachable": {
                "type": "boolean",
                "description": "Indicates whether communication with devices is possible. CLIP Sensors do not yet support reachable verification. Mandatory for all Sensors except ZGPSwitch, Daylight"
              },
              "battery": {
                "type": "integer",
                "description": "The current battery state in percent, only for battery powered devices. Not present when not provided on creation (CLIP sensors)."
              }
            }
          },
          "name": {
            "type": "string",
            "description": "The human readable name of the sensor, can be changed by the user."
          },
          "type": {
            "type": "string",
            "description": "Type name of the sensor"
          },
          "modelid": {
            "type": "string",
            "description": "This parameter uniquely identifies the hardware model of the device for the given manufaturer."
          },
          "manufacturername": {
            "type": "string",
            "description": "The name of the device manufacturer."
          },
          "productname": {
            "type": "string"
          },
          "swversion": {
            "type": "string",
            "description": "This parameter uniquely identifies the software version running in the hardware."
          },
          "uniqueid": {
            "type": "string",
            "description": "Unique id of the sensor. Should be the MAC address of the device."
          },
          "capabilities": {
            "type": "object"
          }
        },
        "forms": [
          {
            "href": "15",
            "contentType": "application/json",
            "op": [
              "readproperty"
            ]
          }
        ]
      }
    }
  }




const Rainbow1 = "https://esiremotelab.esi.ei.tum.de:8081/RainbowHAT1";
const Rainbow2 = "https://esiremotelab.esi.ei.tum.de:8081/RainbowHAT2"

demo()
async function demo() {

     try{

        obj=await servient.start();

        var th1= await WoTHelpers.fetch(Rainbow1);
        thing1= await obj.consume(th1);      
        
        var th2= await WoTHelpers.fetch(Rainbow2);
        thing2= await obj.consume(th2);   
        
        thing3= await obj.consume(hue_td);
        thing4= await obj.consume(hue_td2);


        let temp1 = await thing3.readProperty("temperature");
        val1=temp1.state.temperature
        console.log(val1)
        let temp2 = await thing4.readProperty("temperature");
        val2=temp2.state.temperature
        console.log(val2)

        thing1.invokeAction("writeDisplay",String(val1).substring(0,2) + "'C"); 
        thing2.invokeAction("writeDisplay",String(val2).substring(0,2) + "'C"); 

        setTimeout(function(){ thing1.invokeAction("clearDisplay"); }, 5000);
        setTimeout(function(){ thing2.invokeAction("clearDisplay"); }, 5000);

        setTimeout(function(){ process.exit(0); }, 5500);



     }
     catch (err) {
        console.error("Script error:", err);
    }

}

setTimeout(function(){ process.exit(0); }, 8000);