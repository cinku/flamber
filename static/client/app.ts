$((): void =>  {
    let flamberApp: angular.IModule = angular.module('flamberApp', ['ui.router', 'ngMaterial']);
    
    flamberApp.controller("HomeController", main.controllers.HomeController);
    
    flamberApp.config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider: ng.ui.IUrlRouterProvider,
                                                                $stateProvider: ng.ui.IStateProvider) => {
        
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "static/client/partials/home.html",
            controller: "HomeController as HomeCtrl"
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