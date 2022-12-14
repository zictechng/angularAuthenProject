import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:any = {}; // this will hold values coming from the html input at once and
  // then send it to the service which in turn send it to api endpoint and save to db

  constructor(private _auth: AuthService,
    private _router: Router){}

  ngOnInit(): void {

  }

  // login methmod here
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      err => console.log(err)
    );
    //console.log(this.loginUserData);
    // test if data is coming from the login html page
  };
}
