/**
 * Created by Ilian on 13/02/2016.
 */
(function () {

    'use strict';
    function LogOutController(Parse, $route, $location) {
        var vm = this;

        vm.logOut = function(currentUser){
            currentUser = Parse.User.logOut();
            if(currentUser){
                $route.reload();
            }

        }

    }

    angular.module('coffeApp.controllers').controller('LogOutController', ['Parse','$route', '$location', LogOutController]);
}());