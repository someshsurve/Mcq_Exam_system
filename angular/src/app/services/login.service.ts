import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helper";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //generate token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData)
  }

  //login user : set token in local storage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  //islogin : user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //logOut : remove token from local storage
  public logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set user details
  public setUser(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logOut();
      return null;
    }
  }

  // get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
