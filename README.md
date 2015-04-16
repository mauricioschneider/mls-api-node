#Mozilla Location Service API wrapper for Node.js

> The Mozilla Location Service (MLS) is an open service which lets devices determine their location based on network infrastructure like WiFi access points and cell towers. This network based location service complements satellite based navigation systems like A-GPS. Combined these two approaches are one of the foundations for enabling context aware applications.

_Excerpt from the [Mozilla Location Service website](https://location.services.mozilla.com/)_

## API key
Please refer to their [development documentation](https://mozilla-ichnaea.readthedocs.org/en/latest/api/index.html#api-access-keys) for further details on how to obtain an API key.

## How to use

### Geolocate

```
var Mls = require('mls');

mls = new Mls('API_KEY'); // if no API_KEY is provided, "test" will be used

data = {
  "wifiAccessPoints": [
    {"macAddress":"a2:86:02:e1:56:4c"},
    {"macAddress":"1b:d3:44:ea:9e:54"},
    {"macAddress":"d7:32:58:ba:8d:d0"},
    {"macAddress":"67:87:ea:fa:80:66"}
  ]
};

mls.geolocate(data, function(err, loc) {
  // loc = { location: { lat: -10.45, lng: -30.6667 }, accuracy: 50000 }
});
```

### Geosubmit

```
var Mls = require('mls');

mls = new Mls('API_KEY'); // if no API_KEY is provided, "test" will be used

data = { "items": 
  [
    {
    "latitude": -22.7539192,
    "longitude": -43.4371081,
    "accuracy": 10.0,
    "altitude": 100.0,
    "altitudeAccuracy": 50.0,
    "timestamp": 1405602028568,
    "heading": 45.0,
    "speed": 3.6,
    "cellTowers": [
        {
          "radioType": "gsm",
          "cellId": 12345,
          "locationAreaCode": 2,
          "mobileCountryCode": 208,
          "mobileNetworkCode": 1,
          "age": 3,
          "asu": 31,
          "signalStrength": -51,
          "timingAdvance": 1
        }
    ],
    "wifiAccessPoints": [
        {
          "macAddress": "01:23:45:67:89:ab",
          "age": 3,
          "channel": 6,
          "frequency": 2437,
          "signalToNoiseRatio": 13,
          "signalStrength": -77
        },
        {
          "macAddress": "23:45:67:89:ab:cd"
        }
    ]
    }
  ]
};

mls.geosubmit(data, function(err, res) {
  // res = {}
});
```