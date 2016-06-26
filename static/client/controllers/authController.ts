namespace main.controllers {
    export class AuthController {
        private username: string;
        private email: string;
        private password: string;

        static $inject = ['$scope', '$http'];

        constructor(private $scope: ng.IScope, private $http: ng.IHttpService){

        }

        public signUp() : void {
            let data = { 'username': this.username, 'email': this.email, 'password': this.password };
            this.$http.post('/users', data);
            console.log('asd');
        }
    }
}