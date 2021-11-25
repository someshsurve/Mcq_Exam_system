import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  };

  ngOnInit(): void {
  }

  formSubmit() {
    alert("submit");
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert("Username is required!!");
      return;
    }
  }

}
