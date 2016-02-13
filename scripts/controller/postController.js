/**
 * Created by Ilian on 11/02/2016.
 */
(function(){
    'use strict';

    function PostController(Parse, $location){
        var vm = this;
        vm.addPost = function(post, postForm){
            if(postForm.$valid){
                var Post = Parse.Object.extend('Post');
                var post = new Post();

                post.set('title', $('#inputTitle').val());
                post.set('blogText', $('#inputPostText').val());

                post.save(null, {
                    success: $location.path('/blog')

                    }
                )
            }
        }
    }

    angular.module('coffeApp.controllers').controller('PostController', ['Parse', '$location', PostController]);
}());
