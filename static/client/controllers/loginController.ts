namespace main.controllers {
    export class LoginController {
        username: string;
        password: string;
        
        static $inject = ['$scope', '$http'];
        
        constructor(private $scope: ng.IScope, private $http: ng.IHttpService){

        }
    }
}