$((): void =>  {
    let flamberApp: angular.IModule = angular.module('flamberApp', ['ui.router', 'ngMaterial']);
    
    flamberApp.config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider: ng.ui.IUrlRouterProvider,
                                                                $stateProvider: ng.ui.IStateProvider) => {
        
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "static/client/partials/home.html",
            controller: main.controllers.HomeController
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