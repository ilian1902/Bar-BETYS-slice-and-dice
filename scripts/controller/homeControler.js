/**
 * Created by Ilian on 25/01/2016.
 */
(function(){
    'use strict';

    function HomeController(){
        var vm = this;

        vm.hi = 'HI';
    }

    angular.module('coffeApp')
        .controller('HomeController', [HomeController]);
}());