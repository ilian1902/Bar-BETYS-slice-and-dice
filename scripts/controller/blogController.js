/**
 * Created by Ilian on 12/02/2016.
 */
(function(){
    'use strict';

    function BlogController(data){
        var vm =this;

        vm.currentPost = function(query){
            data.get()
        }
    }


    angular.module('coffeApp.controllers').controller('BlogController', ['data', BlogController]);
}());