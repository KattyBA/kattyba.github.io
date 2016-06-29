/**
 * Created by Kat on 28.06.2016.
 */
angular.module('myApp')
    .controller('CatsController',['$http', function($http) {
        var controller = this;
       $http.get('http://localhost:8008/cats').success(function(data) {
           controller.cats = data.cats;
       });
    }]);
