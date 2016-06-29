namespace main.controllers {
    export class AuthController {
        private username: string;
        private email: string;
        private password: string;

        static $inject = ['$scope', '$http', '$auth', '$state'];

        constructor(private $scope: ng.IScope, private $http: ng.IHttpService, private $auth: satellizer.$auth, private $state: ng.ui.IStateService) {

        }

        public signUp() : void {
            let data = { 'username': this.username, 'email': this.email, 'password': this.password };
            this.$auth.signup(data)
            .then(function(response){
                console.log('success');
                console.log(response);
                this.$state.go('home');
            })
            .catch(function(response) {
               console.log('error');
               console.log(response);                
            });
        }
    }
}