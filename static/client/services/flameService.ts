namespace flamber.services {
    export class FlameService {
        
        static $inject = ['$http'];
        
        constructor(private $http: ng.IHttpService){
            
        }
        
        public getFlames(): ng.IHttpPromise<flamber.interfaces.Flame[]> {
            return this.$http.get('/flames');
        }
        public getFlame(id: number): ng.IHttpPromise<flamber.interfaces.Flame> {
            return this.$http.get('/flames/' + id);
        }
    }
}