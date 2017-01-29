import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public username: string;
  public name: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    let routeUser = this.route.params
                      .forEach((param: Params) => {
                        this.username = param['username'];
                      });
    if (this.userService.isLoggedIn){ 
      this.name = this.userService.getUser();
    }
  }

}
