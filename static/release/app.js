var flamber;
(function (flamber) {
    var services;
    (function (services) {
        var FlameService = (function () {
            function FlameService($http) {
                this.$http = $http;
            }
            FlameService.prototype.getFlames = function () {
                return this.$http.get('/flames');
            };
            FlameService.prototype.getFlame = function (id) {
                return this.$http.get('/flames/' + id);
            };
            FlameService.$inject = ['$http'];
            return FlameService;
        }());
        services.FlameService = FlameService;
    })(services = flamber.services || (flamber.services = {}));
})(flamber || (flamber = {}));
var flamber;
(function (flamber) {
    var services;
    (function (services) {
        var UserService = (function () {
            function UserService($http) {
                this.$http = $http;
            }
            UserService.prototype.getUsers = function () {
                return this.$http.get('/users');
                // return this.$http.get('/users').then((response) => { 
                //     return response.data['user'] as flamber.interfaces.User[];
                // });
            };
            UserService.prototype.getUser = function (id) {
                return this.$http.get('/users/' + id);
                // return this.$http.get('/users/' + id).then((response) => {
                //    return response.data['user'] as flamber.interfaces.User;
                // });
            };
            UserService.$inject = ['$http'];
            return UserService;
        }());
        services.UserService = UserService;
    })(services = flamber.services || (flamber.services = {}));
})(flamber || (flamber = {}));
var main;
(function (main) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController($scope, flameService) {
                var _this = this;
                this.$scope = $scope;
                this.flameService = flameService;
                flameService.getFlames().then(function (response) {
                    _this.flames = response.data['flame'];
                });
            }
            HomeController.$inject = ['$scope', 'FlameService'];
            return HomeController;
        }());
        controllers.HomeController = HomeController;
    })(controllers = main.controllers || (main.controllers = {}));
})(main || (main = {}));
var main;
(function (main) {
    var controllers;
    (function (controllers) {
        var LoginController = (function () {
            function LoginController($scope, $http, $auth, $rootScope, $state) {
                this.$scope = $scope;
                this.$http = $http;
                this.$auth = $auth;
                this.$rootScope = $rootScope;
                this.$state = $state;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                var user = { 'username': this.username, 'password': this.password };
                this.$auth.login(user)
                    .then(function (response) {
                    console.log('success logging in');
                    console.log(response);
                    _this.$rootScope.username = _this.$auth.getPayload()['name'];
                    _this.$state.go('home');
                })
                    .catch(function (response) {
                    console.log('error logging in');
                    console.log(response);
                });
            };
            LoginController.$inject = ['$scope', '$http', '$auth', '$rootScope', '$state'];
            return LoginController;
        }());
        controllers.LoginController = LoginController;
    })(controllers = main.controllers || (main.controllers = {}));
})(main || (main = {}));
var main;
(function (main) {
    var controllers;
    (function (controllers) {
        var AuthController = (function () {
            function AuthController($scope, $http, $auth, $state) {
                this.$scope = $scope;
                this.$http = $http;
                this.$auth = $auth;
                this.$state = $state;
            }
            AuthController.prototype.signUp = function () {
                var data = { 'username': this.username, 'email': this.email, 'password': this.password };
                this.$auth.signup(data)
                    .then(function (response) {
                    console.log('success');
                    console.log(response);
                    this.$state.go('home');
                })
                    .catch(function (response) {
                    console.log('error');
                    console.log(response);
                });
            };
            AuthController.$inject = ['$scope', '$http', '$auth', '$state'];
            return AuthController;
        }());
        controllers.AuthController = AuthController;
    })(controllers = main.controllers || (main.controllers = {}));
})(main || (main = {}));
$(function () {
    var flamberApp = angular.module('flamberApp', ['ui.router', 'ngMaterial', 'satellizer']);
    // flamberApp.controller("HomeController", main.controllers.HomeController);
    // flamberApp.controller("LoginController", main.controllers.LoginController);
    flamberApp.service("UserService", flamber.services.UserService);
    flamberApp.service("FlameService", flamber.services.FlameService);
    flamberApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
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
                controller: function ($auth) {
                    $auth.logout();
                }
            });
        }])
        .config(['$authProvider', function ($authprovider) {
            $authprovider.signupUrl = '/users';
        }]);
    flamberApp.run(function ($rootScope, $auth) {
        // run
        $rootScope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };
        $rootScope.username = $auth.isAuthenticated() ? $auth.getPayload()['name'] : '';
    });
    angular.bootstrap(document, ['flamberApp']);
});
