/**
 * Created by Ilian on 10/02/2016.
 */
(function () {

    'use strict';
    function MainController(Parse, auth) {
        var vm = this;

        var currentUser = Parse.User.current(); // proba za audentikaciq
        var query = new Parse.Query('currentUser');

        vm.currentLogUser = currentUser;
        query.find(currentUser.name,{
            success: console.log(currentUser)
        });

        //var currentUser = Parse.User.current();
        //if(currentUser){
        //    vm.curentLogUser = currentUser;
        //}

    }

    //Parse.User.logIn(username, password, {
    //    success: function(user) {
    //        var currentUser = Parse.User.current();
    //        currentUser.fetch().then(function(fetchedUser) {
    //            var name = fetchedUser.getUsername();
    //            $('.alertmsg').html('<div id="alert"><p>You are' + name + '</div>');
    //        });
    //    }
    //});




    angular.module('coffeApp.controllers').controller('MainController', ['Parse','auth', MainController]);
}());
