$((): void =>  {
    let flamberApp: angular.IModule = angular.module('flamberApp', ['ui.router', 'ngMaterial']);
    
    //flamberApp.controller("HomeController", main.controllers.HomeController);
    flamberApp.service("UserService", flamber.services.UserService);
    flamberApp.service("FlameService", flamber.services.FlameService);
    
    flamberApp.config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider: ng.ui.IUrlRouterProvider,
                                                                $stateProvider: ng.ui.IStateProvider) => {
        
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "static/client/partials/home.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "static/client/partials/about.html"
        });
    }]);
    
    flamberApp.run(() => {
       // run 
    });
    
    angular.bootstrap(document, ['flamberApp']);
});