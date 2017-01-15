import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public username: string;
	public password: string;

	constructor(private userService: UserService, private toastr: ToastsManager) { }

	ngOnInit() {
	}

	public login() {
		this.userService.login(this.username, this.password).subscribe(() => {
			this.toastr.success('Sucessfully logged in!');
		},
		(err) => {
			this.toastr.error('Oops.. ' + err);
		});
	}

	public logout() {
		this.userService.logout();
	}
}
