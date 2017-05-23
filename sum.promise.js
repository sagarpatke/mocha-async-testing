module.exports = function(left, right) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(left+right);
    });
  });
}

