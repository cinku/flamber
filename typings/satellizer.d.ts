// Type definitions for satellizer 0.14.1
// Basic definitions made by cinko

/// <reference path="./angular.d.ts" />

declare namespace satellizer {
    interface $auth {
        login(user: any, ...options: any[]): ng.IHttpPromise<any>;
        signup(user: any, ...options: any[]): ng.IHttpPromise<any>;
        logout(): ng.IPromise<void>;
        isAuthenticated(): boolean;
        removeToken(): void;
        getToken(): string;
        getPayload(): any;
        setToken(response: any): void;
    }
}