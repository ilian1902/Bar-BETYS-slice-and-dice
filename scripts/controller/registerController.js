/**
 * Created by Ilian on 09/02/2016.
 */
(function () {
    'use strict';

    function RegisterController($location, Parse) {
        var vm = this;

        vm.register = function (user, registerForm) {
            if (registerForm.$valid) {
                var data = {
                    name: $('#inputUserName').val(),
                    password: $('#inputPassword').val(),
                    email: $('#inputEmail').val(),
                    avatar: $('#img').val()
                };
                //var User = Parse.Object.extend('User');
                //var userQuery = new Parse.Query(User);
                var user = new Parse.User();
                user.set('username', data.name).set('password', data.password).set('email', data.email);
                user.signUp(null, {
                    success: function(user){
                        return $location.path('/');
                        //vm.currentLogUser = user.get('username')
                    }
                });
            }
        }
    }

    angular.module('coffeApp.controllers').controller('RegisterController', ['$location', 'Parse', RegisterController]);
}());