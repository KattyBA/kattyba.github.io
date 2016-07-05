/**
 * Created by Kat on 24.06.2016.
 */
angular.module('myApp')
    .factory('myFactory',['$http', function($http) {
        return $http.get('http://192.168.0.105:8008/dogs').success(function(data) {
            return data;
        }).error(function(error) {
            return error;
        });
    }]);