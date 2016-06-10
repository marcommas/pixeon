var router = angular.module('appPixeon.router', []);

router
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");
        }]);

router
    .config(['$stateProvider',
        function($stateProvider) {

            $stateProvider

                .state('login', {
                    url :'/login',
                    views :  {
                        '': {
                            templateUrl: 'view/login.html',
                            controller: 'appPixeon.controller.login',
                        },
                    },
                })

                .state('home', {
                    url :'/',
                    views :  {
                        '': {
                            controller: 'appPixeon.controller.home',
                            templateUrl: 'view/home.html',
                        },
                    },
                })

    }])