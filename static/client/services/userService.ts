namespace flamber.services {
    export class UserService {
        constructor(private $http: ng.IHttpService){
        
        }
        
        public getUsers(): ng.IHttpPromise<flamber.interfaces.User[]> {
            return this.$http.get('/users');
            // return this.$http.get('/users').then((response) => { 
            //     return response.data['user'] as flamber.interfaces.User[];
            // });
        }
        
        public getUser(id: number): ng.IHttpPromise<flamber.interfaces.User[]> {
            return this.$http.get('/users/' + id);
            // return this.$http.get('/users/' + id).then((response) => {
            //    return response.data['user'] as flamber.interfaces.User;
            // });
        }
    }
}