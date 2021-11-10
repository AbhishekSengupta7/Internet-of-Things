// Required steps to create a servient for a client
const { HttpsClientFactory } = require("@node-wot/binding-http");
const { Servient, Helpers } = require("@node-wot/core");

const servient = new Servient();

const WoTHelpers = new Helpers(servient);
servient.addClientFactory(new HttpsClientFactory({ config : { proxy : ""}}));



servient.addCredentials({
    "urn:dev:ops:32473-HueOutdoorSensor-1": {
        username: "03736060",
        password: "ZSQcfwqeZRu0OFir"
    }
});

servient.addCredentials({
  "urn:dev:ops:32473-HueLight-1": {
      username: "03736060",
      password: "ZSQcfwqeZRu0OFir"
  }
});

servient.addCredentials({
  "urn:dev:ops:32473-HueLight-2": {
      username: "03736060",
      password: "ZSQcfwqeZRu0OFir"
  }
});

servient.addCredentials({
  "urn:dev:ops:32473-UnicornpHAT-001": {
      username: "03736060",
      password: "ZSQcfwqeZRu0OFir"
  }
});

servient.addCredentials({
  "urn:dev:ops:32473-UnicornpHAT-002": {
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
huelight_td1={
  "title": "Hue Color Lamp 1",
  "id": "urn:dev:ops:32473-HueLight-1",
  "description": "This is a Philips Hue Color Light Bulb that can be controlled remotely. This is on the left of the desk 1",
  "@context": [
  "https://www.w3.org/2019/wot/td/v1",
  {
  "@language": "en"
  }
  ],
  "securityDefinitions": {
  "basic_sc": {
  "scheme": "basic",
  "in": "header"
  }
  },
  "security": [
  "basic_sc"
  ],
  "base": "https://esiremotelab.esi.ei.tum.de:8081/LabLocal/api/17AvYQeLM2T8Z3r0e3BiEvb9Qdwt36yU2BudTxrn/lights/1/",
  "properties": {
  "lightInformation": {
  "title": "State and Attributes Of Light",
  "description": "Gets the attributes and state of a given light. There are more attributes that are not listed here and are not of importance.",
  "type": "object",
  "properties": {
  "state": {
  "title": "Light State",
  "description": "Details the state of the light, see the state table below for more details.",
  "readOnly": true,
  "type": "object",
  "properties": {
  "on": {
  "description": "On/Off state of the light. On=true, Off=false",
  "type": "boolean"
  },
  "alert": {
  "description": "The alert effect, which is a temporary change to the bulb’s state.'l' of lselect stands for loop.",
  "type": "string",
  "enum": [
  "none",
  "select",
  "lselect"
  ]
  },
  "hue": {
  "description": "The hue value to set light to.The hue value is a wrapping value between 0 and 65535. Both 0 and 65535 are red, 25500 is green and 46920 is blue.",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  },
  "bri": {
  "description": "brightness level",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "sat": {
  "description": "Saturation of the light. 254 is the most saturated (colored) and 0 is the least saturated (white).",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "xy": {
  "type": "array",
  "description": "The x and y coordinates of a color in CIE color space.The first entry is the x coordinate and the second entry is the y coordinate. Both x and y must be between 0 and 1. If the specified coordinates are not in the CIE color space, the closest color to the coordinates will be chosen.",
  "items": {
  "type": "number",
  "minimum": -1,
  "maximum": 1
  },
  "maxItems": 2,
  "minItems": 2
  },
  "ct": {
  "description": "The Mired color temperature of the light. 2012 connected lights are capable of 153 (6500K) to 500 (2000K).",
  "type": "integer",
  "minimum": 153,
  "maximum": 500
  },
  "effect": {
  "description": "The dynamic effect of the light. Currently “none” and “colorloop” are supported. Other values will generate an error of type 7.Setting the effect to colorloop will cycle through all hues using the current brightness and saturation settings.",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  },
  "colormode": {
  "type": "string",
  "enum": [
  "xy",
  "ct"
  ]
  },
  "reachable": {
  "description": "Indicates if a light can be reached by the bridge",
  "type": "boolean"
  }
  }
  },
  "type": {
  "description": "A fixed name describing the type of light",
  "type": "string"
  },
  "name": {
  "description": "A unique, editable name given to the light",
  "type": "string"
  },
  "modelid": {
  "description": "The hardware model of the light.",
  "type": "string"
  },
  "swversion": {
  "description": "An identifier for the software version running on the light",
  "type": "string"
  }
  },
  "forms": [
  {
  "href": "",
  "htv:methodName": "GET",
  "contentType": "application/json",
  "op": "readproperty"
  }
  ]
  }
  },
  "actions": {
  "setState": {
  "title": "Set State",
  "description": "Allows the user to turn the light on and off, modify the hue and effects",
  "input": {
  "type": "object",
  "properties": {
  "on": {
  "description": "On/Off state of the light. On=true, Off=false",
  "type": "boolean"
  },
  "bri": {
  "description": "Brightness level. Values higher than 254 are taken as 254",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "alert": {
  "description": "The alert effect, which is a temporary change to the bulb’s state.'l' of lselect stands for loop. Presence of lselect ignores transitiontime",
  "type": "string",
  "enum": [
  "lselect",
  "none",
  "select"
  ]
  },
  "transisiontime": {
  "description": "The duration of the transition from the light’s current state to the new state.",
  "type": "integer",
  "unit": "100ms",
  "minimum": 0,
  "maximum": 65535
  },
  "bri_inc": {
  "description": "Increments or decrements the value of the brightness. bri_inc is ignored if the bri attribute is provided.",
  "type": "integer",
  "minimum": -254,
  "maximum": 254
  },
  "hue": {
  "description": "The hue value to set light to.The hue value is a wrapping value between 0 and 65535. Both 0 and 65535 are red, 25500 is green and 46920 is blue.",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  },
  "sat": {
  "description": "Saturation of the light. 254 is the most saturated (colored) and 0 is the least saturated (white).",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "xy": {
  "type": "array",
  "description": "The x and y coordinates of a color in CIE color space.The first entry is the x coordinate and the second entry is the y coordinate. Both x and y must be between 0 and 1. If the specified coordinates are not in the CIE color space, the closest color to the coordinates will be chosen.",
  "items": {
  "type": "number",
  "minimum": -1,
  "maximum": 1
  },
  "maxItems": 2,
  "minItems": 2
  },
  "ct": {
  "description": "The Mired color temperature of the light. 2012 connected lights are capable of 153 (6500K) to 500 (2000K).",
  "type": "integer",
  "minimum": 153,
  "maximum": 500
  },
  "effect": {
  "description": "The dynamic effect of the light. Currently “none” and “colorloop” are supported. Other values will generate an error of type 7.Setting the effect to colorloop will cycle through all hues using the current brightness and saturation settings.",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  },
  "sat_inc": {
  "description": "Increments or decrements the value of the sat. sat_inc is ignored if the sat attribute is provided. Any ongoing sat transition is stopped. Setting a value of 0 also stops any ongoing transition. The bridge will return the sat value after the increment is performed.",
  "type": "integer",
  "minimum": -254,
  "maximum": 254
  },
  "hue_inc": {
  "description": "Increments or decrements the value of the hue. hue_inc is ignored if the hue attribute is provided. Any ongoing color transition is stopped. Setting a value of 0 also stops any ongoing transition. The bridge will return the hue value after the increment is performed.Note if the resulting values are < 0 or > 65535 the result is wrapped. ",
  "type": "integer",
  "minimum": -65534,
  "maximum": 65534
  },
  "ct_inc": {
  "description": "Increments or decrements the value of the ct. ct_inc is ignored if the ct attribute is provided. Any ongoing color transition is stopped. Setting a value of 0 also stops any ongoing transition. The bridge will return the ct value after the increment is performed.",
  "type": "integer",
  "minimum": -65534,
  "maximum": 65534
  },
  "xy_inc": {
  "type": "array",
  "description": "TIncrements or decrements the value of the xy. xy_inc is ignored if the xy attribute is provided. Any ongoing color transition is stopped. Setting a value of 0 also stops any ongoing transition. Will stop at it’s gamut boundaries. The bridge will return the xy value after the increment is performed. Max value [0.5, 0.5].",
  "items": {
  "type": "number",
  "minimum": -0.5,
  "maximum": 0.5
  },
  "maxItems": 2,
  "minItems": 2
  }
  }
  },
  "output": {
  "type": "array",
  "items": {
  "type": "object",
  "properties": {
  "success": {
  "oneOf": [
  {
  "type": "object",
  "properties": {
  "/lights/1/state/on": {
  "description": "Current state of the light after operation",
  "type": "boolean"
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/bri": {
  "description": "Current brightness level",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/alert": {
  "description": "Already provided alert value",
  "type": "string",
  "enum": [
  "lselect",
  "none",
  "select"
  ]
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/transisiontime": {
  "description": "Already provided transitiontime",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/hue": {
  "description": "Current hue of the light after the operation",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/sat": {
  "description": "Current saturation of the light after the operation",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/xy": {
  "description": "Current xy color of the light after the operation",
  "type": "array",
  "items": {
  "type": "number",
  "minimum": -1,
  "maximum": 1
  },
  "maxItems": 2,
  "minItems": 2
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/ct": {
  "description": "Current ct color of the light after the operation",
  "type": "integer",
  "minimum": 153,
  "maximum": 500
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/effect": {
  "description": "Current running effect on the light after the operation",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/ct": {
  "description": "Current running effect on the light after the operation",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  }
  }
  }
  ]
  }
  }
  }
  },
  "forms": [
  {
  "href": "state",
  "contentType": "application/json",
  "htv:methodName": "PUT",
  "op": [
  "invokeaction"
  ]
  }
  ],
  "idempotent": false,
  "safe": false
  }
  }
  }

huelight_td2={
  "title": "Hue Color Lamp 2",
  "id": "urn:dev:ops:32473-HueLight-2",
  "description": "This is a Philips Hue Color Light Bulb that can be controlled remotely. This is on the right of the desk 1",
  "@context": [
  "https://www.w3.org/2019/wot/td/v1",
  {
  "@language": "en"
  }
  ],
  "securityDefinitions": {
  "basic_sc": {
  "scheme": "basic",
  "in": "header"
  }
  },
  "security": [
  "basic_sc"
  ],
  "base": "https://esiremotelab.esi.ei.tum.de:8081/LabLocal/api/17AvYQeLM2T8Z3r0e3BiEvb9Qdwt36yU2BudTxrn/lights/2/",
  "properties": {
  "lightInformation": {
  "title": "State and Attributes Of Light",
  "description": "Gets the attributes and state of a given light. There are more attributes that are not listed here and are not of importance.",
  "type": "object",
  "properties": {
  "state": {
  "title": "Light State",
  "description": "Details the state of the light, see the state table below for more details.",
  "readOnly": true,
  "type": "object",
  "properties": {
  "on": {
  "description": "On/Off state of the light. On=true, Off=false",
  "type": "boolean"
  },
  "alert": {
  "description": "The alert effect, which is a temporary change to the bulb’s state.'l' of lselect stands for loop.",
  "type": "string",
  "enum": [
  "none",
  "select",
  "lselect"
  ]
  },
  "hue": {
  "description": "The hue value to set light to.The hue value is a wrapping value between 0 and 65535. Both 0 and 65535 are red, 25500 is green and 46920 is blue.",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  },
  "bri": {
  "description": "brightness level",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "sat": {
  "description": "Saturation of the light. 254 is the most saturated (colored) and 0 is the least saturated (white).",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "xy": {
  "type": "array",
  "description": "The x and y coordinates of a color in CIE color space.The first entry is the x coordinate and the second entry is the y coordinate. Both x and y must be between 0 and 1. If the specified coordinates are not in the CIE color space, the closest color to the coordinates will be chosen.",
  "items": {
  "type": "number",
  "minimum": -1,
  "maximum": 1
  },
  "maxItems": 2,
  "minItems": 2
  },
  "ct": {
  "description": "The Mired color temperature of the light. 2012 connected lights are capable of 153 (6500K) to 500 (2000K).",
  "type": "integer",
  "minimum": 153,
  "maximum": 500
  },
  "effect": {
  "description": "The dynamic effect of the light. Currently “none” and “colorloop” are supported. Other values will generate an error of type 7.Setting the effect to colorloop will cycle through all hues using the current brightness and saturation settings.",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  },
  "colormode": {
  "type": "string",
  "enum": [
  "xy",
  "ct"
  ]
  },
  "reachable": {
  "description": "Indicates if a light can be reached by the bridge",
  "type": "boolean"
  }
  }
  },
  "type": {
  "description": "A fixed name describing the type of light",
  "type": "string"
  },
  "name": {
  "description": "A unique, editable name given to the light",
  "type": "string"
  },
  "modelid": {
  "description": "The hardware model of the light.",
  "type": "string"
  },
  "swversion": {
  "description": "An identifier for the software version running on the light",
  "type": "string"
  }
  },
  "forms": [
  {
  "href": "",
  "htv:methodName": "GET",
  "contentType": "application/json",
  "op": "readproperty"
  }
  ]
  }
  },
  "actions": {
  "setState": {
  "title": "Set State",
  "description": "Allows the user to turn the light on and off, modify the hue and effects",
  "input": {
  "type": "object",
  "properties": {
  "on": {
  "description": "On/Off state of the light. On=true, Off=false",
  "type": "boolean"
  },
  "bri": {
  "description": "Brightness level. Values higher than 254 are taken as 254",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "alert": {
  "description": "The alert effect, which is a temporary change to the bulb’s state.'l' of lselect stands for loop. Presence of lselect ignores transitiontime",
  "type": "string",
  "enum": [
  "lselect",
  "none",
  "select"
  ]
  },
  "transisiontime": {
  "description": "The duration of the transition from the light’s current state to the new state.",
  "type": "integer",
  "unit": "100ms",
  "minimum": 0,
  "maximum": 65535
  },
  "bri_inc": {
  "description": "Increments or decrements the value of the brightness. bri_inc is ignored if the bri attribute is provided.",
  "type": "integer",
  "minimum": -254,
  "maximum": 254
  },
  "hue": {
  "description": "The hue value to set light to.The hue value is a wrapping value between 0 and 65535. Both 0 and 65535 are red, 25500 is green and 46920 is blue.",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  },
  "sat": {
  "description": "Saturation of the light. 254 is the most saturated (colored) and 0 is the least saturated (white).",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  },
  "xy": {
  "type": "array",
  "description": "The x and y coordinates of a color in CIE color space.The first entry is the x coordinate and the second entry is the y coordinate. Both x and y must be between 0 and 1. If the specified coordinates are not in the CIE color space, the closest color to the coordinates will be chosen.",
  "items": {
  "type": "number",
  "minimum": -1,
  "maximum": 1
  },
  "maxItems": 2,
  "minItems": 2
  },
  "ct": {
  "description": "The Mired color temperature of the light. 2012 connected lights are capable of 153 (6500K) to 500 (2000K).",
  "type": "integer",
  "minimum": 153,
  "maximum": 500
  },
  "effect": {
  "description": "The dynamic effect of the light. Currently “none” and “colorloop” are supported. Other values will generate an error of type 7.Setting the effect to colorloop will cycle through all hues using the current brightness and saturation settings.",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  },
  "sat_inc": {
  "description": "Increments or decrements the value of the sat. sat_inc is ignored if the sat attribute is provided. Any ongoing sat transition is stopped. Setting a value of 0 also stops any ongoing transition. The bridge will return the sat value after the increment is performed.",
  "type": "integer",
  "minimum": -254,
  "maximum": 254
  },
  "hue_inc": {
  "description": "Increments or decrements the value of the hue. hue_inc is ignored if the hue attribute is provided. Any ongoing color transition is stopped. Setting a value of 0 also stops any ongoing transition. The bridge will return the hue value after the increment is performed.Note if the resulting values are < 0 or > 65535 the result is wrapped. ",
  "type": "integer",
  "minimum": -65534,
  "maximum": 65534
  },
  "ct_inc": {
  "description": "Increments or decrements the value of the ct. ct_inc is ignored if the ct attribute is provided. Any ongoing color transition is stopped. Setting a value of 0 also stops any ongoing transition. The bridge will return the ct value after the increment is performed.",
  "type": "integer",
  "minimum": -65534,
  "maximum": 65534
  },
  "xy_inc": {
  "type": "array",
  "description": "TIncrements or decrements the value of the xy. xy_inc is ignored if the xy attribute is provided. Any ongoing color transition is stopped. Setting a value of 0 also stops any ongoing transition. Will stop at it’s gamut boundaries. The bridge will return the xy value after the increment is performed. Max value [0.5, 0.5].",
  "items": {
  "type": "number",
  "minimum": -0.5,
  "maximum": 0.5
  },
  "maxItems": 2,
  "minItems": 2
  }
  }
  },
  "output": {
  "type": "array",
  "items": {
  "type": "object",
  "properties": {
  "success": {
  "oneOf": [
  {
  "type": "object",
  "properties": {
  "/lights/1/state/on": {
  "description": "Current state of the light after operation",
  "type": "boolean"
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/bri": {
  "description": "Current brightness level",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/alert": {
  "description": "Already provided alert value",
  "type": "string",
  "enum": [
  "lselect",
  "none",
  "select"
  ]
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/transisiontime": {
  "description": "Already provided transitiontime",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/hue": {
  "description": "Current hue of the light after the operation",
  "type": "integer",
  "minimum": 0,
  "maximum": 65535
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/sat": {
  "description": "Current saturation of the light after the operation",
  "type": "integer",
  "minimum": 0,
  "maximum": 254
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/xy": {
  "description": "Current xy color of the light after the operation",
  "type": "array",
  "items": {
  "type": "number",
  "minimum": -1,
  "maximum": 1
  },
  "maxItems": 2,
  "minItems": 2
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/ct": {
  "description": "Current ct color of the light after the operation",
  "type": "integer",
  "minimum": 153,
  "maximum": 500
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/effect": {
  "description": "Current running effect on the light after the operation",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  }
  }
  },
  {
  "type": "object",
  "properties": {
  "/lights/1/state/ct": {
  "description": "Current running effect on the light after the operation",
  "type": "string",
  "enum": [
  "none",
  "colorloop"
  ]
  }
  }
  }
  ]
  }
  }
  }
  },
  "forms": [
  {
  "href": "state",
  "contentType": "application/json",
  "htv:methodName": "PUT",
  "op": [
  "invokeaction"
  ]
  }
  ],
  "idempotent": false,
  "safe": false
  }
  }
  }

const uni1 = "https://esiremotelab.esi.ei.tum.de:8081/UnicornPHAT1";
const uni2 = "https://esiremotelab.esi.ei.tum.de:8081/UnicornPHAT2";

demo()


async function demo() {

     try{

        obj=await servient.start();

        
        thing1= await obj.consume(hue_td);  
        
        thing2= await obj.consume(huelight_td1);   

        thing3= await obj.consume(huelight_td2);  
        
        var tdh1= await WoTHelpers.fetch(uni1);
        thing4= await obj.consume(tdh1);

        var tdh2= await WoTHelpers.fetch(uni2);
        thing5= await obj.consume(tdh2);

        let temp2 = await thing1.readProperty("motion");
        var p= temp2.state.presence
        console.log(p)

        
        
        if (p==true)
        
        {
          thing2.invokeAction("setState",{"hue":54432,"sat":254,"on":true,"bri":250});
          thing3.invokeAction("setState",{"hue":13456,"sat":254,"on":true,"bri":250});

          thing4.invokeAction("fillColor","red");
          thing5.invokeAction("fillColor","blue");


          setTimeout(function(){ thing2.invokeAction("setState",{"on":false}); }, 1000);
          setTimeout(function(){ thing3.invokeAction("setState",{"on":false}); }, 1000);
          setTimeout(function(){ thing4.invokeAction("fillColor",[0,0,0]);; }, 1000);
          setTimeout(function(){ thing5.invokeAction("fillColor",[0,0,0]);; }, 1000);
        }



     }
     catch (err) {
        console.error("Script error:", err);
    }

}

setTimeout(function () {
	demo();
}, 10000);
setTimeout(function () {
	demo();
}, 20000);
setTimeout(function () {
	demo();
}, 30000);
setTimeout(function () {
	demo();
}, 40000);
setTimeout(function () {
	demo();
}, 50000);
setTimeout(function () {
	demo();
}, 60000);

