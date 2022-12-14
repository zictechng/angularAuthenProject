import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerUserData:any = {}; // this will hold values coming from the html input at once and
  // then send it to the service which in turn send it to api endpoint and save to db

  constructor(private _auth: AuthService,
    private _router: Router){}

  ngOnInit(){

  }
  registerUser(){
    // console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']); // navigate after register successful to new page
      },
      err => console.log(err)
    )
  }
}
