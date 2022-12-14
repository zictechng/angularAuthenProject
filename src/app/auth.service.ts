import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"; //register api endpoint
  private _loginUrl = "http://localhost:3000/api/login"; //login api endpoint
  constructor(private http: HttpClient,
    private _router: Router) { }

  // this registration method that make the api call
registerUser(user: any){
  return this.http.post<any>(this._registerUrl, user);
}

//login method that call login api endpoint
// the (user) is the data that was send from the UI, which is email and password
loginUser(user: any){
return this.http.post<any>(this._loginUrl, user);
}


// create method to check if user logged and has a valid token
loggedIn(){
  return !! localStorage.getItem('token'); // then !! mean is a boolean operation to return
  // true or false
}

// method/function to logout users
logoutUser(){
  localStorage.removeItem('token');
  this._router.navigate(['/events']);
}
// method to get token from localstorage
getToken(){
  return localStorage.getItem('token');
}
}
