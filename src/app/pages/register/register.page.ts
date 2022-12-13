import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  register() {
    localStorage.setItem(
      'account',
      JSON.stringify({
        username: this.form.controls['username'].value,
        email: this.form.controls['email'].value,
        number: this.form.controls['number'].value,
        password: this.form.controls['password'].value,
      })
    );
    this.navController.back();
  }
}
