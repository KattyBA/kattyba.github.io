/**
 * Created by Kat on 30.05.2016.
 */
var app = angular.module('app', []);

app.controller('bookCntl', function($scope) {
    $scope.name = "Harry";
    $scope.color = '#333';

    $scope.revers = function() {
        $scope.name = $scope.name.split('').reverse().join('');
        console.log($scope.name);
    }
});

app.directive('book', function() {
    var name = "Kate";
    return {
        template: '<div>My directive name is {{name}} <input type="text" ng-model="name"></div>' +
        '<div>my color {{color}}<input type="text" ng-model="color"></div>'+
        '<button ng-click="revers()">My revers directive</button>',
        scope: {        //изолированный scope
            name: '@', // read only (в переменную name из контроллера мы ожидаем получить
            color: '=', // двусторонний датабиндинг
            revers: '&' // выполнить какое-л выражение например функцию
        },
        link: function(scope, elem, attrs) {
        console.log(scope.name);
            console.log(scope);
        }
    }
});