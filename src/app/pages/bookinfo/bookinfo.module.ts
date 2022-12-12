import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookinfoPageRoutingModule } from './bookinfo-routing.module';

import { BookinfoPage } from './bookinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookinfoPageRoutingModule
  ],
  declarations: [BookinfoPage]
})
export class BookinfoPageModule {}
