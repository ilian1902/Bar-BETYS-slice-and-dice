/**
 * Created by Ilian on 10/02/2016.
 */
(function () {

    'use strict';
    function MainController(Parse, auth, $location) {
        var vm = this;

        var currentUser = Parse.User.current();
        if(currentUser){
            vm.curentLogUser = currentUser;
            console.log(currentUser.get('username'));
        }

        var title = {
            home: "bar bety's",
            location: "store location",
            menu: "Dinner menu",
            post: "Post title goes here"
        };

        vm.isTitle = true;
        vm.titleLocation = function(currentLocation){
            if(currentLocation == $location.path('/')){
                return vm.title = title.home
            }
            if(currentLocation != $location.path('/')){
                vm.title = title.location;
                vm.isTitle = false;
            }
        }


        //$scope.clickEvent = function(event) {
        //    if($(event.target).hasClass('icon-closed')) {
        //        $(event.target).removeClass('icon-closed')
        //        $(event.target).addClass('icon-opened')
        //    } else {
        //        $(event.target).removeClass('icon-opened')
        //        $(event.target).addClass('icon-closed')
        //    }
        //}


        //vm.logOut = function(currentUser){
        //    Parse.User.logOut();
        //}

    }

    angular.module('coffeApp.controllers').controller('MainController', ['Parse','auth','$location', MainController]);
}());
