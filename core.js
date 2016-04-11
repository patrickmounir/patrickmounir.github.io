App = angular.module('HashFork', ['ui.bootstrap', 'ngRoute']);

/**
 * Angular Routes
 */

App.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {

            templateUrl : '/partials/name.html',
            controller  : 'mainCtrl'
        })
        .when('/google',{
            templateUrl : '/partials/google.html',
            controller  : 'googleCtrl'
        });

});
