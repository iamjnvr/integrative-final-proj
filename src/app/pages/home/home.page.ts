import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  logged: boolean = false;

  constructor() {}

  ngOnInit() {
    //TODO: REMOVE
    localStorage.setItem(
      'account',
      JSON.stringify({
        username: 'Alds',
      })
    );
  }
}
