/**
 * Created by Ilian on 10/02/2016.
 */
(function(){

    'use strict';

    function LoginController($location){
        var vm = this;

        vm.login = function(user, loginForm){
            if(loginForm.$valid){

                var data = {
                    name: $('#input-userName').val(),
                    password: $('#input-password').val()
                };


                Parse.User.logIn(data.name, data.password, {
                    success: $location.path('/')
                });


                //var currentUser = Parse.User.current(); // proba za audentikaciq
                //vm.currentLogUser = currentUser;
            }
        }
    }

    angular.module('coffeApp.controllers').controller('LoginController', ['$location', LoginController]);
}());