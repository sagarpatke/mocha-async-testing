const sum = require('../sum.promise');
const assert = require('assert');

describe('sum promise', function() {
  it('should return 5 when adding 2 and 3', function(done) {
    sum(2,3).then(function(answer) {
      assert.equal(5, answer);
      done();
    }, done);
  });
});
