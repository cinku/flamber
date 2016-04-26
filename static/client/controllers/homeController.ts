namespace main.controllers {            
    export class HomeController {
        flames: flamber.interfaces.Flames[];
        
        constructor(private $scope: ng.IScope, private $http: ng.IHttpService){
            //$http.get('/flames').then((response) => this.flames = response.data['flame'] as flamber.interfaces.Flames[] );
            // $scope.$on('$viewContentLoaded', (event) => {
            //     $http.get('/flames').then((response) => {
            //         this.flames = response.data['flame'] as flamber.interfaces.Flames[];
            //     })
            // });
        }
    }
}