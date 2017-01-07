import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
	private loggedIn: boolean = false;

	constructor(private http: Http) {
		this.loggedIn = !!localStorage.getItem('auth_token');
	}

	public login(username: string, password: string): Observable<Response> {
		return this
			.http
			.post('/login', JSON.stringify({ username: username, password: password }))
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
