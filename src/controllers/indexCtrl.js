angular.module('Chat')

    .controller('indexCtrl', function($scope, auth){
        $scope.title = "Welcome to Chat";
        $scope.roomsThemes = [ "Sports", "Animals", "Relationship", "Children", "Job", "Policy" ];
        $scope.room = null;

        $scope.user = auth.getUser();

        $scope.setUsername = function() {
            if (!auth.isLoggedin() && $scope.username) {
                auth.setUser($scope.username);
                if (auth.isLoggedin())
                    $scope.user = auth.getUser();
            }
        };

        $scope.enterRoom = function() {

        };
    });