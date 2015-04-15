/*
  Copyright (c) 2015 Mauricio Schneider <lemavri.com>
  Released under the MIT license.
*/

var needle = require('needle'),
    URI     = 'https://location.services.mozilla.com/v1/';

var send_request = function(action, api_key, data, cb) {
  var end_point = URI + action + '?key=' + api_key;

  needle.post(end_point, data, { json: true }, cb);
};

function LocationService(api_key) {
  if(!(this instanceof LocationService)) {
    return new LocationService(api_key);
  }

  this.api_key = api_key;
}

LocationService.prototype.geolocate = function(data, cb) {
  send_request('geolocate', this.api_key, data, function (err, resp) {
    if(err) {
      return cb(err, null);
    }

    cb(null, resp.body);
  });
};

LocationService.prototype.geosubmit = function() {/* pending */};

module.exports = LocationService;