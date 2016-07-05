/**
 * Created by Kat on 27.06.2016.
 */
angular.module('myApp')
    .controller('DogsShowController', ['$http', '$routeParams', function($http, $routeParams) {
        var that = this;
      $http.get('http://192.168.0.105:8008/dogs/' + $routeParams.id).success(function(data) {
          that.dog = data;
      }).error(function(error) {
          return error;
      });
    }]);