var Mls = require('../lib/'),
    should = require('should');

describe('geosubmit', function() {

  var api = new Mls();

  describe('with no data provided', function() {

    it('fails miserably', function (done) {

      api.geosubmit({}, function (err, res) {
        res.error.code.should.equal(400);
        res.error.message.should.equal('Parse Error');
        done();
      });
    });

  });

});