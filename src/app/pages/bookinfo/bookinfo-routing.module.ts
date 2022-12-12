import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinfoPage } from './bookinfo.page';

const routes: Routes = [
  {
    path: '',
    component: BookinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookinfoPageRoutingModule {}
