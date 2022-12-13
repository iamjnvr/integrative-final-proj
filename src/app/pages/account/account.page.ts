import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  // Resolve all variables required
  account!: any;

  constructor(private router: Router) {}

  ngOnInit() {
    let credentials = localStorage.getItem('account');

    if (credentials === null) {
      this.router.navigate(['home']);
    } else {
      let json_cred = JSON.parse(credentials);

      console.log(json_cred);

      this.account = json_cred;
    }
  }

  logout() {
    localStorage.removeItem('account');
    this.router.navigate(['home']);
  }
}
