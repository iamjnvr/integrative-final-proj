import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MenuModule } from 'src/app/modules/menu/menu.module';
import { GalleryModule } from 'src/app/modules/gallery/gallery.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuModule,
    GalleryModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
