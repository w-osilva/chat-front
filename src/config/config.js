angular.module('App')
    .provider('config', function () {
        var provider = {};

        provider.$get = function(){
            return {}
        }

        return provider;
    })