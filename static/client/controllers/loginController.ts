namespace main.controllers {
    export class LoginController {
        private username: string;
        private password: string;
        
        static $inject = ['$scope', '$http', '$auth', '$rootScope', '$state'];
        
        constructor(private $scope: ng.IScope,
                    private $http: ng.IHttpService,
                    private $auth: satellizer.$auth,
                    private $rootScope: any,
                    private $state: ng.ui.IStateService){ //extend rootscope in the future

        }
        
        public login() : void {
            var user = { 'username': this.username, 'password': this.password };
            this.$auth.login(user)
            .then((response) => {
                console.log('success logging in');
                console.log(response);
                this.$rootScope.username = this.$auth.getPayload()['name'];
                this.$state.go('home');
            })
            .catch((response) => {
                console.log('error logging in');
                console.log(response);
            });
        }
    }
}