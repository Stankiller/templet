import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = this.fb.group({
    form_account: ['',Validators.required],
    form_password: ['',Validators.required],
    form_email: ['',Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  get form_account(){return this.form.get('form_account')!;}
  get form_password(){return this.form.get('form_password')!;}
  get form_email(){return this.form.get('form_email')!;}
}
