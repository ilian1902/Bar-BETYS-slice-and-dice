/**
 * Created by Ilian on 10/02/2016.
 */
(function(){

    'use strict';

    function LoginController($location, Parse){
        var vm = this;

        vm.login = function(user, loginForm){
            if(loginForm.$valid){

                var data = {
                    name: $('#input-userName').val(),
                    password: $('#input-password').val()
                };


                Parse.User.logIn(data.name, data.password, {
                    success: function(user){
                        $location.path('/')
                    }
                });



            }
        }
    }

    angular.module('coffeApp.controllers').controller('LoginController', ['$location', 'Parse', LoginController]);
}());