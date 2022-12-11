import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-hotel',
  templateUrl: './package-hotel.component.html',
  styleUrls: ['./package-hotel.component.scss'],
})
export class PackageHotelComponent implements OnInit {
  @Input() src!: string;
  @Input() name!: string;
  @Input() hotel?: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToHotel() {
    let book = this.hotel === undefined ? 'book' : 'book/:' + this.hotel;

    this.router.navigate([book]);
  }
}
