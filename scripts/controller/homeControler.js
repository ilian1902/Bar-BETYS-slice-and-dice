/**
 * Created by Ilian on 25/01/2016.
 */
(function(){
    'use strict';

    function HomeController($location){
        var vm = this;

            vm.home = "bar BETY'S";
            vm.isHidden = true;
    }

    angular.module('coffeApp.controllers').controller('HomeController', ['$location', HomeController]);
}());