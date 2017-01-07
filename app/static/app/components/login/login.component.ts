import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public username: string;
	public password: string;

	constructor(private userService: UserService) { }

	ngOnInit() {
	}

	public login() {
		this.userService.login(this.username, this.password).subscribe(r => console.log(r));
	}
}
