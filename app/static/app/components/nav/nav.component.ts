import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public username: string;

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
  }

  public isAuthenticated = () => {
    const isLoggedIn = this.userService.isLoggedIn();
    if (isLoggedIn) {
      this.username = this.userService.getUser();
    }
    return isLoggedIn;
  }

  public logout = () => {
    this.userService.logout();
  }

}  
