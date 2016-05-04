namespace flamber.services {
    export class UserService {
        constructor(private $http: ng.IHttpService){
        
        }
        
        public getUsers() : string {
            return "test";
        }
    }
}