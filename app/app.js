var app = angular.module('appPixeon', [
    'ngCookies',
    'ui.router',
    'angular-google-gapi',
    
    'appPixeon.router',
    'appPixeon.controller'

]);

app.run(['GAuth', 'GApi', 'GData', '$state', '$rootScope', '$window', '$cookies',
    function(GAuth, GApi, GData, $state, $rootScope, $window, $cookies) {

        $rootScope.gdata = GData;

        var CLIENT = '913829878338-pmj8l3egg4vgrgfltos4qa4i31hf7i1g.apps.googleusercontent.com';
        var BASE;

        BASE = 'http://' + window.location.host + '/_ah/api';

        // load the auth api so that it doesn't have to be loaded asynchronously 
        // when the user clicks the 'login' button.  
        // That would lead to popup blockers blocking the auth window 

        GApi.load('myContactApi', 'v1', BASE);
        GApi.load('calendar', 'v3');
        GAuth.setClient(CLIENT);
        GAuth.setScope('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly'); // default scope is only https://www.googleapis.com/auth/userinfo.email 

        var currentUser = $cookies.get('userId');
        if(currentUser) {
            GData.setUserId(currentUser);
            GAuth.checkAuth().then(
                function () {
                    if($state.includes('login'))
                        $state.go('home');
                },
                function() {
                    $state.go('login');
                }
            );
        } else {
            $state.go('login');
        }



        $rootScope.logout = function() {
            GAuth.logout().then(function () {
                $cookies.remove('userId');
                $state.go('login');
            });
        };
    }
]);

