import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  found: boolean = true;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.found = true;
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    let email = this.form.controls['email'].value;
    let password = this.form.controls['password'].value;

    let credentials = localStorage.getItem('account');

    if (credentials == null) {
      this.found = false;
      console.log('not found');
    } else {
      let json_cred = JSON.parse(credentials);

      if (json_cred.email === email && json_cred.password === password) {
        this.router.navigate(['account']);
      }
    }
  }

  register() {
    this.router.navigate(['register']);
  }
}
