/**
 * Created by Kat on 24.06.2016.
 */
angular.module('myApp').config(function($routeProvider) {
    $routeProvider
        .when('/dogs', {
            templateUrl: "js/templates/dogs/index.html",
            controller: "DogsController",
            controllerAs: 'dogsCtrl'
        })
        .when('/dogs/:id', {
            templateUrl: "js/templates/dogs/show.html",
            controller: "DogsShowController",
            controllerAs: 'dogsShowCtrl'
        })
        .when('/cats', {
            templateUrl: "js/templates/cats/index.html",
            controller: "CatsController",
            controllerAs: 'catsCtrl'
        })
        .otherwise({redirectTo: '/dogs'})
});