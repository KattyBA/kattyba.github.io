/**
 * Created by Kat on 30.05.2016.
 */
var app = angular.module('app', []);

app.controller('mainCntl', function($scope) {

    $scope.name = "Kate";
    $scope.bookmarks = [
        {
            id: 1,
            name: "Name"
        },
        {
            id: 2,
            name: "Name2"
        }
    ];
    $scope.getBook = function() {
        return $scope.bookmarks;
    };
    console.log($scope);
});

app.directive('fooBar', function() {

    return {
        restrict: "E",
        transclude: true,
        template: '<div ng-repeat="books in getBook()">{{books.name}}</div>',
        link: function(scope, elem, attr, cntl, transclude) {
            scope.name = "Lala";
            transclude(scope, function(clone, scope) {
                //elem.append(clone);
            });
            console.log(scope);
        }
    }
})
