namespace main.controllers {
    export class LoginController {
        private username: string;
        private password: string;
        
        static $inject = ['$scope', '$http', '$auth'];
        
        constructor(private $scope: ng.IScope, private $http: ng.IHttpService, private $auth: satellizer.$auth){

        }
        
        public login() : void {
            var user = { 'username': this.username, 'password': this.password };
            this.$auth.login(user)
            .then((response) => {
                console.log('success logging in');
                console.log(response);                
            })
            .catch((response) => {
                console.log('error logging in');
                console.log(response);
            });
        }
    }
}