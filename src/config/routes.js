angular.module('Chat')

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'src/views/index.html',
                    controller: 'indexCtrl'
                })
                .when('/room/:theme', {
                    templateUrl: 'src/views/room.html',
                    controller: 'roomCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ])