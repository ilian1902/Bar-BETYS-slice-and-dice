/**
 * Created by Ilian on 10/02/2016.
 */
(function(){

     function AuthService() {
        var currentUser;

        return {
            login: function() {  },
            logout: function() {  },
            isLoggedIn: function() {  },
            currentUser: function() { return currentUser; }
        };
    }


    //app.controller( 'MainCtrl', function( $scope, AuthService ) {
    //    $scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
    //        $scope.isLoggedIn = isLoggedIn;
    //        $scope.currentUser = AuthService.currentUser();
    //    });
    //});





    angular.module('coffeApp').factory('AuthService', [AuthService]);
}());