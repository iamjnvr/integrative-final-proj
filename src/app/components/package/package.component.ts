import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent implements OnInit {
  @Input() hasHotel: boolean = false;

  @Input() name!: string;
  @Input() description!: string;

  constructor() {}

  ngOnInit() {}
}
