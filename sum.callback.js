module.exports = function(left, right, done) {
  setTimeout(function() {
    done(null, left+right);
  });
}
