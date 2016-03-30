angular.module('Chat')

    .controller('roomCtrl', function($scope, $routeParams, auth){

        $scope.room = $routeParams.theme;
        $scope.username = auth.getUser();

        $scope.new_message = null;
        $scope.messages = [];

        var dispatcher = new WebSocketRails('10.1.60.43:3000/websocket');

        dispatcher.on_open = function(data) { console.log('Connection has been established'); };
        dispatcher.bind('connection_closed', function(data) { console.log('connection is closed'); });

        var channel = dispatcher.subscribe($scope.room);

        //listen room.broadcast
        channel.bind('room.broadcast', function(response) {
            $scope.$apply(function(){
                $scope.messages.push(response);
            });
        }, function(response){
            console.log('FAIL ROOM RECEIVE BROADCAST ');
        });

        //trigger romm.connect
        dispatcher.trigger('room.connect', {
                username: $scope.username,
                room: $scope.room
            },
            function(response){},
            function(response){ console.log('FAIL ROOM CONNECT'); }
        );

        //send message
        $scope.send = function(){
            //trigger room.send_message
            dispatcher.trigger('room.send_message', {
                    message: $scope.new_message,
                    username: $scope.username,
                    room: $scope.room
                },
                function(response){ $scope.new_message = null; },
                function(response){ console.log('FAIL ROOM SEND MESSAGE'); console.log(response); }
            );
        }

    });