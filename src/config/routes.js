angular.module('Chat')

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'src/views/index.html',
                    controller: 'indexCtrl'
                })
                .when('/chat', {
                    templateUrl: 'src/views/chat.html',
                    controller: 'chatCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ])