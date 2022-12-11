import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  load_text: string = 'Loading';

  constructor(private router: Router) {}

  ngOnInit() {
    let inter = setInterval(() => {
      if (this.load_text === 'Loading') {
        this.load_text = 'Loading.';
      } else if (this.load_text === 'Loading.') {
        this.load_text = 'Loading..';
      } else if (this.load_text === 'Loading..') {
        this.load_text = 'Loading...';
      } else if (this.load_text === 'Loading...') {
        this.load_text = 'Loading';
      } else {
        console.log('meight');
      }
    }, 500);

    setTimeout(() => {
      clearInterval(inter);
      this.router.navigate(['home']);
    }, 4000);
  }
}
