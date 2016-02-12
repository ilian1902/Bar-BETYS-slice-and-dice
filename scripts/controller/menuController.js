/**
 * Created by Ilian on 11/02/2016.
 */
(function(){
    'use strict';

    function MenuController($location){
        var vm = this;

        vm.title = "bar BETY'S";
        vm.isNotHome = function($location){
            if($location.path('/menu')){
                $('#header').css('background:',  'url("../img/header.jpg")no-repeat 0 0');
            }
        };
    }

    angular.module('coffeApp.controllers').controller('MenuController', ['$location', MenuController]);
}());