$((): void =>  {
    let flamberApp: angular.IModule = angular.module('flamberApp', ['ui.router', 'ngMaterial', 'satellizer']);
    
    // flamberApp.controller("HomeController", main.controllers.HomeController);
    // flamberApp.controller("LoginController", main.controllers.LoginController);
    flamberApp.service("UserService", flamber.services.UserService);
    flamberApp.service("FlameService", flamber.services.FlameService);
    
    flamberApp.config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider: ng.ui.IUrlRouterProvider,
                                                                $stateProvider: ng.ui.IStateProvider) => {
        
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "static/client/partials/home.html",
            controller: main.controllers.HomeController,
            controllerAs: "HomeCtrl"
        })
        .state('about', {
            url: "/about",
            templateUrl: "static/client/partials/about.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "static/client/partials/login.html",
            controller: main.controllers.LoginController,
            controllerAs: "LoginCtrl"
        })
        .state('register', {
            url: "/register",
            templateUrl: "static/client/partials/signup.html",
            controller: main.controllers.AuthController,
            controllerAs: "AuthCtrl"
        })
        .state('logout', {
            url: "/logout",
            controller: function($auth: satellizer.$auth) {
                $auth.logout();
            }
    });
    }])
    .config(['$authProvider', ($authprovider: any) => {
        $authprovider.signupUrl = '/users';
    }]);
    
    flamberApp.run(($rootScope: any, $auth: satellizer.$auth) => {
       // run
       $rootScope.isAuthenticated = () => {
           return $auth.isAuthenticated();
        };
        $rootScope.username = $auth.isAuthenticated()? $auth.getPayload()['name'] : '';
    });
    
    angular.bootstrap(document, ['flamberApp']);
});