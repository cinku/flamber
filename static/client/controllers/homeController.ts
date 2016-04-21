namespace main.controllers { 
        interface Flames {
            id: number;
            name: string;
            pub_date: string;
        }   
    export class HomeController {
        private flames: Flames[];
        
        constructor(private $scope: ng.IScope, private $http: ng.IHttpService){
            $http.get('/flames').success((response: Flames[]) => {
               this.flames = response;
            });
        }
    }
}