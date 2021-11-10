// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));








servient.addCredentials({
    "urn:dev:ops:32473-sensehat-003": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});
servient.addCredentials({
    "urn:dev:ops:32473-sensehat-004": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});
servient.addCredentials({
    "urn:dev:ops:32473-sensehat-002": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});
servient.addCredentials({
    "urn:dev:ops:32473-sensehat-001": {
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
servient.addCredentials({
    "urn:dev:ops:32473-HueOutdoorSensor-1": {
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

hue_td3={
    "@context": [
      "https://www.w3.org/2019/wot/td/v1",
      {
        "@language": "en"
      }
    ],
    "title": "Hue Outdoor Sensor 1",
    "id": "urn:dev:ops:32473-HueOutdoorSensor-1",
    "security": "basic_sc",
    "securityDefinitions": {
      "basic_sc": {
        "scheme": "basic",
        "in": "header"
      }
    },
    "base": "https://esiremotelab.esi.ei.tum.de:8081/LabLocal/api/17AvYQeLM2T8Z3r0e3BiEvb9Qdwt36yU2BudTxrn/sensors/",
    "description": "Hue Sensor for outdoor applications that can measure temperature, light level and presence of motion",
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
            "href": "3",
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
            "href": "4",
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
            "href": "2",
            "contentType": "application/json",
            "op": [
              "readproperty"
            ]
          }
        ]
      }
    }
  }

const sensehat1= "https://esiremotelab.esi.ei.tum.de:8081/SenseHat1";
const sensehat2= "https://esiremotelab.esi.ei.tum.de:8081/SenseHat2";
const sensehat3= "https://esiremotelab.esi.ei.tum.de:8081/SenseHat3";
const sensehat4= "https://esiremotelab.esi.ei.tum.de:8081/SenseHat4";



demo()

async function demo() {

     try{

        obj=await servient.start();
        var th1= await WoTHelpers.fetch(sensehat1);
        thing1= await obj.consume(th1);

        var th2= await WoTHelpers.fetch(sensehat2);
        thing2= await obj.consume(th2);

        var th3= await WoTHelpers.fetch(sensehat3);
        thing3= await obj.consume(th3);      
        
        var th4= await WoTHelpers.fetch(sensehat4);
        thing4= await obj.consume(th4);   
        
        thing5= await obj.consume(hue_td);
        thing6= await obj.consume(hue_td2);
        thing7= await obj.consume(hue_td3);
        
        
        
        let temp1 = await thing1.readProperty("temperature");
        //console.log(temp1)
        let temp2 = await thing2.readProperty("temperature");
        //console.log(temp2)
        let temp3 = await thing3.readProperty("temperature");
        //console.log(temp3)
        let temp4 = await thing4.readProperty("temperature");
        //console.log(temp4)
        let pres1 = await thing1.readProperty("pressure");
        //console.log(pres1)
        let pres2 = await thing2.readProperty("pressure");
        //console.log(pres2)
        let pres3 = await thing3.readProperty("pressure");
        //console.log(pres3)
        let pres4 = await thing4.readProperty("pressure");
        //console.log(pres4)
        let humi1 = await thing1.readProperty("humidity");
        //console.log(humi1)
        let humi2 = await thing2.readProperty("humidity");
        //console.log(humi2)
        let humi3 = await thing3.readProperty("humidity");
        //console.log(humi3)
        let humi4 = await thing4.readProperty("humidity");
        //console.log(humi4)
        let lightlevel1= await thing5.readProperty("lightInformation"); 
        val1=lightlevel1.state.lightlevel
        let lightlevel2= await thing6.readProperty("lightInformation"); 
        val2=lightlevel2.state.lightlevel
        let lightlevel3= await thing7.readProperty("lightInformation"); 
        val3=lightlevel3.state.lightlevel
        //console.log(val1)
        //console.log(pres1)
        //console.log(pres2)
        //console.log(pres3)
        //console.log(pres4)
        average_temp= await (temp1+temp2+temp3+temp4)/4;
        average_pres= await (pres1+pres2+pres3+pres4)/4;
        average_humi= await (humi1+humi2+humi3+humi4)/4;
        average_light= await(val1+val2+val3)/4
        //console.log(average_light)

        thing1.invokeAction("showMessage",{"textString":String(average_temp).substring(0,5),"scrollSpeed":0.08,"textColour":[255,0,0]}); 
        //console.log(average_pres)
        thing2.invokeAction("showMessage",{"textString":String(average_pres).substring(0,6),"scrollSpeed":0.08,"textColour":[255,0,0]});
        thing3.invokeAction("showMessage",{"textString":String(average_humi).substring(0,4),"scrollSpeed":0.08,"textColour":[255,0,0]});
        thing4.invokeAction("showMessage",{"textString":String(average_light).substring(0,7),"scrollSpeed":0.07,"textColour":[255,0,0]});
          
     
        setTimeout(function(){ thing1.invokeAction("clear"); }, 5000);
        setTimeout(function(){ thing2.invokeAction("clear"); }, 5000);
        setTimeout(function(){ thing3.invokeAction("clear"); }, 5000);
        setTimeout(function(){ thing4.invokeAction("clear"); }, 5000);

        setTimeout(function(){ process.exit(0); }, 5500);
    
    }
     catch (err) {
        console.error("Script error:", err);
    }

}


