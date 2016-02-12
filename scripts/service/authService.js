/**
 * Created by Ilian on 10/02/2016.
 */
(function(){

     var authService = function authService($http, $q, $cookies, Parse, baseServiceUrl) {

         var TOKEN_KEY = 'authentication';

         // register
         var register = function register(user) {

             var defered = $q.defer();

             $http.post(baseServiceUrl + 'users/', user)
                 .then(function () {
                     defered.resolve();
                 }, function (response) {
                     var error = response.data.ModelState;
                     if (error && error[Object.keys(error)[0]][0]) {
                         error = error[Object.keys(error)[0]][0];
                     } else {
                         error = response.data.message;
                     }

                     defered.reject(error);
                 });

             return defered.promise;
         }

         //login
         var login = function login(user) {

             var deferred = $q.defer();

             //process data with url encoded format because API expect it this way.
             var data = "grant_type=password&username=" + (user.username || '') + '&password=' + (user.password || '');


             //set header in order to prevent Angular making data to JSON
             $http.post(baseUrl + 'Token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                 .success(function (response) {
                     var tokenValue = response.access_token; //token for authorized access

                     //cookie expiration date
                     var theBigDay = new Date();
                     theBigDay.setHours(theBigDay.getHours() + 72);

                     //save cookie for refresh scenarios
                     $cookies.put(TOKEN_KEY, tokenValue, { expires: theBigDay });

                     //set default authorization header so that we do not need to provise hte header with every request
                     $http.defaults.headers.common.Authorization = 'Bearer ' + tokenValue;

                     getIdentity().then(function () {
                         deferred.resolve(response);
                     });
                 })
                 .error(function (err) {
                     deferred.reject(err);
                 });

             return deferred.promise;
         };




        return {
            register: register
        };
    }

    angular.module('coffeApp.services')
        .factory('auth', ['$http', '$q', '$cookies', 'Parse', 'baseServiceUrl', authService]);

    //app.controller( 'MainCtrl', function( $scope, AuthService ) {
    //    $scope.$watch( AuthService.isLoggedIn, function ( isLoggedIn ) {
    //        $scope.isLoggedIn = isLoggedIn;
    //        $scope.currentUser = AuthService.currentUser();
    //    });
    //});
}());