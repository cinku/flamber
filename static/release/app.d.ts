declare namespace flamber.interfaces {
    interface Flame {
        id: number;
        text: string;
        pub_date: string;
        user_id: number;
    }
}
declare namespace flamber.interfaces {
    interface User {
        id: number;
        name: string;
        username: string;
        email: string;
        flames: flamber.interfaces.Flame[];
    }
}
declare namespace flamber.services {
    class FlameService {
        private $http;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        getFlames(): ng.IHttpPromise<flamber.interfaces.Flame[]>;
        getFlame(id: number): ng.IHttpPromise<flamber.interfaces.Flame>;
    }
}
declare namespace flamber.services {
    class UserService {
        private $http;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        getUsers(): ng.IHttpPromise<flamber.interfaces.User[]>;
        getUser(id: number): ng.IHttpPromise<flamber.interfaces.User>;
    }
}
declare namespace main.controllers {
    class HomeController {
        private $scope;
        private flameService;
        flames: flamber.interfaces.Flame[];
        static $inject: string[];
        constructor($scope: ng.IScope, flameService: flamber.services.FlameService);
    }
}
declare namespace main.controllers {
    class LoginController {
        private $scope;
        private $http;
        private $auth;
        private $rootScope;
        private $state;
        private username;
        private password;
        static $inject: string[];
        constructor($scope: ng.IScope, $http: ng.IHttpService, $auth: satellizer.$auth, $rootScope: any, $state: ng.ui.IStateService);
        login(): void;
    }
}
declare namespace main.controllers {
    class AuthController {
        private $scope;
        private $http;
        private $auth;
        private $state;
        private username;
        private email;
        private password;
        static $inject: string[];
        constructor($scope: ng.IScope, $http: ng.IHttpService, $auth: satellizer.$auth, $state: ng.ui.IStateService);
        signUp(): void;
    }
}
