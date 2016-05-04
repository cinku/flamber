namespace flamber.services {
    export class UserService {
        constructor(private $http: ng.IHttpService){
        
        }
        
        
        //fix this shit its probably so wrong
        public getUsers(): ng.IHttpPromise<flamber.interfaces.Flames[]> {
            return this.$http.get('/flames').then((response) => { 
                return response.data['flame'] as flamber.interfaces.Flames[];
            });
        }
    }
}