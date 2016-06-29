/**
 * Created by Kat on 24.06.2016.
 */
angular.module('myApp')
    .controller('myController', ['$scope', 'myFactory', '$http', function($scope, myFactory, $http) {
        myFactory.success(function(data) {
            $scope.books = data;
        });
        $scope.addNewBook = function(book) {
            $scope.books.push(book);
            $scope.book = '';
            $http.post('http://localhost:8008/books', book)
                .success(function(data) {
                    console.log('Book addad seccessfuly');
                })
                .error(function(error) {
                    console.log('Error');
                });
        }
    }]);