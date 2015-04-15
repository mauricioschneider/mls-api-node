var Mls = require('../lib/'),
    should = require('should');

describe('geolocate', function() {

  var api = new Mls();

  describe('when no WiFi access points are provided', function() {

    it('returns a location', function (done) {

      api.geolocate({}, function (err, loc) {
        loc.should.have.property('location');
        loc.should.have.property('accuracy');
        done();
      });
    });

  });

  describe('when WiFi access points are provided', function() {

    it('returns a location', function (done) {

      data = {
        "wifiAccessPoints": [
          {"macAddress":"a2:86:02:e1:56:4c"},
          {"macAddress":"1b:d3:44:ea:9e:54"},
          {"macAddress":"d7:32:58:ba:8d:d0"},
          {"macAddress":"67:87:ea:fa:80:66"}
        ]
      };

      api.geolocate(data, function (err, loc) {
        loc.should.have.property('location');
        loc.should.have.property('accuracy');
        done();
      });
    });

  });

});