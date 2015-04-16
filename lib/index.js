/*
  Copyright (c) 2015 Mauricio Schneider <lemavri.com>
  Released under the MIT license.
*/

var needle = require('needle'),
    URI     = 'https://location.services.mozilla.com/v1/';

function LocationService(api_key) {
  if(!(this instanceof LocationService)) {
    return new LocationService(api_key);
  }

  this.api_key = api_key || 'test';
}

LocationService.prototype.geolocate = function(data, cb) {
  send_request('geolocate', this.api_key, data, cb);
};

LocationService.prototype.geosubmit = function(data, cb) {
  send_request('geosubmit', this.api_key, data, cb);
};

/* Behold the DRYness Keeper. */

var send_request = function(action, api_key, data, cb) {
  var end_point = URI + action + '?key=' + api_key;

  needle.post(end_point, data, { json: true }, function (err, resp) {

    if(err) {
      return cb(err, null);
    }

    cb(null, resp.body);
  });
};

module.exports = LocationService;