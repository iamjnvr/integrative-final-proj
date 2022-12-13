import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() logged!: boolean;

  @Input() contentId?: string;
  @Input() page!: string;

  @Input() acctName?: string;

  constructor(private router: Router) {}

  ngOnInit() {
    let acct = localStorage.getItem('account');
    console.log(acct);

    if (acct === null) {
      this.logged = false;
      console.log('logged false');
    } else {
      this.logged = true;
      console.log('logged true');
      let map = JSON.parse(acct);
      this.acctName = map.username;
    }
  }

  ngAfterContentChecked() {
    let acct = localStorage.getItem('account');
    console.log(acct);

    if (acct === null) {
      this.logged = false;
      console.log('logged false');
    } else {
      this.logged = true;
      console.log('logged true');
      let map = JSON.parse(acct);
      this.acctName = map.username;
    }
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToExplore() {
    this.router.navigate(['packages']);
  }

  goToBook() {
    this.router.navigate(['book']);
  }

  goToAbout() {
    this.router.navigate(['about']);
  }

  goToHistory() {
    this.router.navigate(['history']);
  }

  goToAccount() {
    this.router.navigate(['account']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
