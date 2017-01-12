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

	public login(username: string, password: string): Observable<any> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http
			.post('/login', JSON.stringify({ username: username, password: password }), { headers })
			.map((response) => response.json())
			.catch((error) => {
				let errMsg: string;
				if (error instanceof Response) {
					const body = error.json() || '';
					const err = body.error || JSON.stringify(body);
					errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
				} else {
					errMsg = error.message ? error.message : error.toString();
				}
				return Observable.throw(errMsg);
			})
			.map(resp => {
				localStorage.setItem('auth_token', resp.auth_token);
				localStorage.setItem('user_profile', resp.profile);
				this.loggedIn = true;
			});
	}

	public logout(): void {
		localStorage.removeItem('auth_token');
		localStorage.removeItem('user_profile');
		this.loggedIn = false;
	}

	public isLoggedIn(): boolean {
		return this.loggedIn;
	}

	public register(username: string, mail: string, password: string): Observable<any> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http
			.post('/users', JSON.stringify({ username: username, email: mail, password: password }), { headers })
			.map((response) => response.json())
			.catch((error) => {
				let errMsg: string;
				if (error instanceof Response) {
					const body = error.json() || '';
					const err = body.error || JSON.stringify(body);
					errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
				} else {
					errMsg = error.message ? error.message : error.toString();
				}
				return Observable.throw(errMsg);
			})
			.map(resp => {
				console.log('user signed up');
			});
	}

}