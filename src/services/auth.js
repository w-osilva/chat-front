angular.module('Chat')
    .service('auth', function(){

        this.setUser = function(user){
            window.sessionStorage.setItem('user', user);
            console.log(this.getUser());
        };

        this.getUser = function(){
            return window.sessionStorage.getItem('user');
        };

        this.isLoggedin = function(){
            return (this.getUser()) ? true : false;
        };

    });