import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackagesPageRoutingModule } from './packages-routing.module';

import { PackagesPage } from './packages.page';
import { PackagesModule } from 'src/app/modules/packages/packages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackagesPageRoutingModule,
    PackagesModule,
  ],
  declarations: [PackagesPage],
})
export class PackagesPageModule {}
