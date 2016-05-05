namespace main.controllers {            
    export class HomeController {
        flames: flamber.interfaces.Flame[];
        
        constructor(private $scope: ng.IScope, private $http: ng.IHttpService){

        }
    }
}