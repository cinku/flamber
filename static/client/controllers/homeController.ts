namespace main.controllers {            
    export class HomeController {
        flames: flamber.interfaces.Flame[];
        
        static $inject = ['$scope', '$http'];
        
        constructor(private $scope: ng.IScope, private $http: ng.IHttpService){

        }
    }
}