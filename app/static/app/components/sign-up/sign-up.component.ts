import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	username: string;
	password: string;
	mail: string;

	constructor(private userService: UserService, private toastr: ToastsManager) { }

	ngOnInit() {
	}

	signUp() {
		this.userService.register(this.username, this.mail, this.password).subscribe(() => {
			this.toastr.success('Successfully signed in! You can now log in!');
		});
	}
}
