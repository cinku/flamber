namespace flamber.services {
    export class FlameService {
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