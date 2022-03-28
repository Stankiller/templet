import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      account: new FormControl(Validators.required),
      password: new FormControl( Validators.required)
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginform.value);
  }

  get account(){return this.loginform.get('account')!;}
  get password(){return this.loginform.get('password')!;}
}
