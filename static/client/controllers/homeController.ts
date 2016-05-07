namespace main.controllers {            
    export class HomeController {
        flames: flamber.interfaces.Flame[];
        
        static $inject = ['$scope', 'FlameService'];
        
        constructor(private $scope: ng.IScope, private flameService: flamber.services.FlameService){

        }
    }
}