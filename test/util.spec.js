var assert = require('assert');
var util = require('../lib/util');

describe('util', function() {

  describe('#stddev()', function () {
    it('should return ~2.44 out of [1, 2, 3, 4, 5, 6, 7, 8]', function () {
      var variance = util.stddev([
        { last: 1 },
        { last: 2 },
        { last: 3 },
        { last: 4 },
        { last: 5 },
        { last: 6 },
        { last: 7 },
        { last: 8 }
      ], 'last');

      assert.equal(variance, 6);
    });
  });

  describe('#variance()', function () {
    it('should return 6 out of [1, 2, 3, 4, 5, 6, 7, 8]', function () {
      var variance = util.variance([
        { last: 1 },
        { last: 2 },
        { last: 3 },
        { last: 4 },
        { last: 5 },
        { last: 6 },
        { last: 7 },
        { last: 8 }
      ], 'last');

      assert.equal(variance, 6);
    });
  });

  describe('#avg()', function () {
    it('should return 2 out of [2, 2]', function () {
      var avg = util.avg([
        {
          last: 2
        },
        {
          last: 2
        }
      ], 'last');

      assert.equal(avg, 2);
    });
    it('should return 2 out of [1, 2, 3]', function () {
      var avg = util.avg([
        {
          last: 1
        },
        {
          last: 2
        },
        {
          last: 3
        }
      ], 'last');

      assert.equal(avg, 2);
    });
    it('should return 2 out of [2]', function () {
      var avg = util.avg([
        {
          last: 2
        }
      ], 'last');

      assert.equal(avg, 2);
    });
    it('should return null out of empty array []', function () {
      var avg = util.avg([], 'last');

      assert.equal(avg, null);
    });
  });
});
