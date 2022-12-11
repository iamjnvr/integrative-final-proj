import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-hotel',
  templateUrl: './package-hotel.component.html',
  styleUrls: ['./package-hotel.component.scss'],
})
export class PackageHotelComponent implements OnInit {
  @Input() src!: string;
  @Input() name!: string;

  constructor() {}

  ngOnInit() {}
}
