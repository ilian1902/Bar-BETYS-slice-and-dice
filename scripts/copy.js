/**
 * Created by Ilian on 25/01/2016.
 */
(function(){
    'use strict';

    function config($routeProvider, $locationProvider) {

        var CONTROLLER_VIEW_MODEL = 'vm';

        //$locationProvider = html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController',
                controllerAs: CONTROLLER_VIEW_MODEL
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
            .when('/acount/register',{
                templateUrl: 'templates/register.html',
                controller: 'RegisterController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .otherwise({redirectTo: '/'});
    }

    angular.module('coffeApp.controllers', []);
    angular.module('coffeApp', ['ngRoute', 'coffeApp.controllers']).config(['$routeProvider','$locationProvider', config]);
}());