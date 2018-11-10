import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service';
import { UserService } from './../shared/user.service';
import { FirebaseUserModel } from './../shared/user.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel();


  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,

  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.user = data;
        // this.createForm(this.user.name);
      }
    });
  }


  save(value) {
    this.userService.updateCurrentUser(value).then(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  logout() {
    this.authService.doLogout().then(
      res => {
        this.location.back();
      },
      error => {
        console.log('Logout error', error);
      }
    );
  }
}
