/**
 * Created by Ilian on 25/01/2016.
 */
(function(){
    'use strict';

    function config($routeProvider, $locationProvider) {

        var CONTROLLER_VIEW_MODEL = 'vm';

        //$locationProvider.html5Mode(true);

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
                templateUrl: 'templates/blog.html',
                controller: 'BlogController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .when('/acount/register',{
                templateUrl: 'templates/register.html',
                controller: 'RegisterController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/add/post',{
                templateUrl: 'templates/addPost.html',
                controller: 'PostController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .otherwise({redirectTo: '/'});
    }


    function run($http, $cookies, auth, $rootScope, $templateCache){
        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        })
    };

    angular.module('coffeApp.services', []);
    angular.module('coffeApp.controllers', ['coffeApp.services']);

    angular.module('coffeApp', ['ngRoute','ngCookies', 'coffeApp.controllers'])
        .config(['$routeProvider','$locationProvider', config])
        .run(['$http', '$cookies', 'auth','$rootScope','$templateCache', run])
        .value('Parse', Parse)
        .constant('baseServiceUrl', 'https://api.parse.com/1/');
}());