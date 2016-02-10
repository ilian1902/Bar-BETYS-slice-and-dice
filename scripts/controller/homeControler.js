/**
 * Created by Ilian on 25/01/2016.
 */
(function(){
    'use strict';

    function HomeController(){
        var vm = this;

        vm.home = 'hi';
    }
    angular.module('coffeApp.controllers').controller('HomeController', [HomeController]);
    //angular.module('coffeApp')
    //    .controller('HomeController', [HomeController]);
}());