angular.module('MyApp', [])
.factory('MathService', function() {
  return {
    sum: function(a, b) {
      return a + b;
    }
  }
})
