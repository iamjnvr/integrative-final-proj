import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagesinfoPage } from './packagesinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PackagesinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagesinfoPageRoutingModule {}
