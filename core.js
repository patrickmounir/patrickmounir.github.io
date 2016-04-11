App = angular.module('HashFork', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */

App.controller('ctrl',['$scope', function($scope) {

  $scope.user =
    {name: '',
    email: ''};

  }]);

App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {

            templateUrl : '/partials/name.html',
            controller  : 'mainCtrl'
        })
        .when('/confirmation',{
            templateUrl : '/partials/confirmation.html',
            controller  : 'confirmation'
        })
        .when('/payment', {
            templateUrl : '/partials/payment.html',
            controller  : 'paymentCtrl'
        });

});
