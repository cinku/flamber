import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	private loggedIn: boolean = false;

	constructor(private http: Http) {
		this.loggedIn = !!localStorage.getItem('auth_token');
	}

	public login(username: string, password: string): Observable<Response> {
		let headers = new Headers();
    	headers.append('Content-Type', 'application/json');
		return this
			.http
			.post('/auth', JSON.stringify({ username: username, password: password }), { headers })
			.map(response => response.json())
			.map(response => {
				if(response.success) {
					localStorage.setItem('auth_token', response.auth_token);
					this.loggedIn = true;
				}

				return response.success;
			});
	}

	public logout(): void {
		localStorage.removeItem('auth_token');
		this.loggedIn = false;
	}

	public isLoggedIn(): boolean {
		return this.loggedIn;
	}

}