import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackagesinfoPageRoutingModule } from './packagesinfo-routing.module';

import { PackagesinfoPage } from './packagesinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagesinfoPageRoutingModule
  ],
  declarations: [PackagesinfoPage]
})
export class PackagesinfoPageModule {}
