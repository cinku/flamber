namespace main.controllers {
    export class LoginController {
        username: string;
        password: string;
        
        constructor(private $scope: ng.IScope, private $http: ng.IHttpService){

        }
    }
}