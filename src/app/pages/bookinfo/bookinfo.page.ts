import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.page.html',
  styleUrls: ['./bookinfo.page.scss'],
})
export class BookinfoPage implements OnInit {
  hotelMap = [
    {
      name: 'Microtel Wyndham',
      image:
        '../../../assets/media/hotels/batangas/microtel_wyndham_batangas/highres (2).jpg',
    },
    {
      name: 'Birds of Paradise',
      image:
        '../../../assets/media/hotels/bohol/Bird_of_Paradise/highres (1).jpg',
    },
    {
      name: "SMAK's Hotel",
      image: "../../../assets/media/hotels/cebu/SMAK's Hotel/lowres.jpg",
    },
  ];
  data!: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => console.log(data));
    this.data = this.activatedRoute.snapshot.paramMap.get('num')?.split(':')[1];
    this.data = this.hotelMap[this.data];
  }

  ngOnInit() {}

  book() {
    let history = localStorage.getItem('history');

    if (history === null) {
      let histomap = [
        {
          hotel: this.data.name,
          status: 'pending',
          created: new Date().toISOString(),
        },
      ];

      localStorage.setItem('history', JSON.stringify(histomap));
    } else {
      let histomap: any = [];

      JSON.parse(history).forEach((e: any) => {
        histomap.push(e);
      });
      histomap.push({
        hotel: this.data.name,
        status: 'pending',
        created: new Date().toISOString(),
      });

      console.log(histomap);
      localStorage.setItem('history', JSON.stringify(histomap));
    }
  }
}
