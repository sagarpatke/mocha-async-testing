const sum = require('../sum.callback');
const assert = require('assert');

describe('sum callback', function() {
  it('should return 5 when 3 and 2 are passed', function(done) {
    sum(2,3,function(err, answer) {
      if(err) { return done(err); }
      assert.equal(answer, 5);
      done();
    })
  });
});
