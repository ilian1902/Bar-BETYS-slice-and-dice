/**
 * Created by Ilian on 12/02/2016.
 */
(function() {
    'use strict';


    function DataService($http, $q, baseUrl){

        function get(url, params) {
            var defered = $q.defer();

            $http
                .get(baseUrl + url, {
                    params: params,
                    headers: {
                        'X-Parse-Application-Id': '5Xaa3ePLj1KMmFdWZg2SO2c4EvBbHnYP56mwXrz0',
                        'X-Parse-REST-API-Key': 'QhgcZtp47IzB6AuQd0KcQ0U1d9uAURSSOGMCC5YJ'
                    }
                })
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (err) {

                    defered.reject(err);
                });

            return defered.promise;
        }

        function post(url, data) {
            var defered = $q.defer();

            $http
                .post(baseUrl + url, data)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (err) {

                    defered.reject(err);
                });

            return defered.promise;
        }

        function put(url, data) {
            var defered = $q.defer();

            $http
                .put(baseUrl + url, data)
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (err) {
                    defered.reject(err);
                });

            return defered.promise;
        }

        return {
            get: get,
            post: post,
            put: put
        }

    }


    angular.module('coffeApp.services')
        .factory('data', ['$http', '$q', 'Parse', 'baseServiceUrl', DataService]);
}());