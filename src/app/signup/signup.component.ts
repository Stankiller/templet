import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormGroupDirective,NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      form_account: new FormControl('',Validators.required),
      form_password: new FormControl('', Validators.required),
      form_email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  get form_account(){return this.form.get('form_account')!;}
  get form_password(){return this.form.get('form_password')!;}
  get form_email(){return this.form.get('form_email')!;}
  matcher = new MyErrorStateMatcher();
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
