// (function() {
//     var app = angular.module('store', []);
//     var gems = [
//         {
//             name: 'Dodecahedron',
//             price: 2.95,
//             description: 'lalala',
//             canPurchase: false,
//             soldOut: true
//         },
//         {
//             name: 'Pentagonal Gem',
//             price: 5.95,
//             description: 'lalala',
//             canPurchase: true,
//             soldOut: true
//         }
//     ];
//
//     app.controller('StoreController', function() {
//         this.products = gems;
//     });
//     app.controller('myCntr', function($scope) {
//         $scope.hello = 55;
//         $scope.myBook = 'AngularJS';
//     });
//
// })();
// var app = angular.module('app', []);
// app.controller('firstCtrl', function($scope, myFactory) {
//     console.log('firstCtrl');
//     $scope.hello = 'hello world';
//     $scope.myFactory = myFactory;
//     $scope.getBookmark = function() {
//         return "My bookmark";
//     };
//     $scope.setHello = function(text) {
//         $scope.hello = text;
//     };
// });
// app.controller('secondCtrl', function($scope, myFactory) {
//     console.log('secondCtrl');
//     $scope.myFactory = myFactory;
//     $scope.hello = 'hello world';
// });
// app.factory('myFactory', function() {
//     return {
//         hello: 'hello world!',
//         helloTwo: function() {
//             return "Hello World)";
//         }
//     }
// })
//var app = angular.module('app', []);

// app.controller('firstCtrl', function() {
//     this.hello = 'Hello, Kate!';
//
// });
//
// app.controller('secondCtrl', function() {
//
// });
//
// app.controller('thirdCtrl', function() {
// });
// app.directive('foo', function() {
//     return {
//         link: function(scope, element, attrs) {
//             element.on('click', function() {
//                 if (element.text() === "FOO") {
//                     element.text('BAR');
//                 } else {
//                     element.text('FOO');
//                 }
//             })
//         }
//     }
// })

// app.controller('mainCtrl', function() {
//     this.money1 = '55$';
//     this.money2 = '$55';
//     this.money3 = '55';
//
// });
//
// app.filter('moneyFilter', function() {
//     return function(str) {
//         var lastChar = str.slice(-1);
//         var firstChar = str.slice(0, 1);
//         var slicedPart;
//
//         if (lastChar === '$') {
//             slicedPart =  str.slice(0, str.length-1)
//             return '$' + slicedPart;
//         } else if (firstChar === '$') {
//             return str;
//         } else {
//             return '$' + str;
//         }
//         return str;
//     }
// })
// app.directive('fooBar', function() {
//     var bookMarks = [
//         {
//             id: 1,
//             name: 'AngularJS'
//         },
//         {
//             id: 2,
//             name: 'EmberJS'
//         },
//         {
//             id: 3,
//             name: 'ReactJS'
//         }
//     ]
//     return {
//         template: "<div ng-repeat='book in myBookmarks'>{{book.name}}</div>",
//         link: function(scope, element, attrs) {
//             scope.name = 'Sasha';
//             scope.myBookmarks = bookMarks;
//             console.log("Foo-bar");
//         }
//     }
// })

var app = angular.module('app', []);

// app.controller('mainCtrl', function($scope) {
//     $scope.name = "Bob";
// });
//
// app.directive('fooBar', function() {
//     return {
//         restrict: 'E',
//         transclude: true,
//         template: 'This is my super directive',
//         link: function(scope, element, attrs, ctrl, transclude) {
//              console.log('This is my super directive');
//              transclude(scope, function(clone, scope) {
//                  console.log(scope, clone);
//                  element.append(clone);
//              });
//          }
//     };
// });

app.directive('fooBar', function() {
    var bookmarks = [
        {
            id: 1,
            name: 'EmberJS'
        }, {
            id: 2,
            name: 'AngularJS'
        }
    ];
    return {
        restrict: 'E',
        templateUrl: 'bookmarks.html',
        link: function(scope, element, attrs) {
            console.log("Hello");
            scope.bookmarks = bookmarks;
        }
    }
});
