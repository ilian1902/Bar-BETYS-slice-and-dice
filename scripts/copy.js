/**
 * Created by Ilian on 25/01/2016.
 */
(function(){
    'use strict';
    function config($routeProvider) {
        var CONTROLLER_VIEW_MODEL = 'vm';
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/login', {
                templateUrl: 'templates/login.html'
            })
            .when('/menu', {
                templateUrl: 'templates/menu.html'
            })
            .when('/galery', {
                templateUrl: 'templates/galery.html'
            })
            .when('/blog', {
                templateUrl: 'templates/blog.html'
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .when('/register',{
                templateUrl: 'templates/register.html',
                controller: 'RegisterController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .otherwise({redirectTo: '/home'});
    }

    angular.module('coffeApp', ['coffeApp.controller']);
    angular.module('coffeApp.controller', [])
        .config(['$routeProvider', config]);
}());