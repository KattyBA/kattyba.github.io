/**
 * Created by Kat on 28.06.2016.
 */
angular.module('myApp')
    .directive('nwCats', function() {
       return {
           replace: true,
           restrict: "A",
           templateUrl: "js/templates/directives/nwCats.html",
           scope: {
               img: '=',
               breed: '=',
               description: '='
           },
           link: function(scope, elem, attrs) {
               elem.on('click', function() {
                   elem.find('.cat_description').toggleClass('hidden');
               });
               console.log(attrs.breed);
           }
       }
    });