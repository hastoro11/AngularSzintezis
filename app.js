'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
]).
    config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            })

            .otherwise({redirectTo: '/home'});

        //$locationProvider.html5Mode(true);
    }])


    .controller('HomeCtrl', function ($scope) {

    })
