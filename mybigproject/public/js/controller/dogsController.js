/**
 * Created by Kat on 24.06.2016.
 */
angular.module('myApp')
    .controller('DogsController', ['myFactory', function(myFactory){
        var that = this;
        myFactory.success(function(data) {
            that.dogs = data.dog;
        });
}]);