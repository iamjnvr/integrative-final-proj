import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full',
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./pages/book/book.module').then((m) => m.BookPageModule),
  },
  {
    path: 'package',
    loadChildren: () =>
      import('./pages/packages/packages.module').then(
        (m) => m.PackagesPageModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountPageModule),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./pages/book/book.module').then((m) => m.BookPageModule),
  },
  {
    path: 'packages',
    loadChildren: () =>
      import('./pages/packages/packages.module').then(
        (m) => m.PackagesPageModule
      ),
  },
  {
    path: 'packagesinfo',
    loadChildren: () =>
      import('./pages/packagesinfo/packagesinfo.module').then(
        (m) => m.PackagesinfoPageModule
      ),
  },
  {
    path: 'loader',
    loadChildren: () =>
      import('./pages/loader/loader.module').then((m) => m.LoaderPageModule),
  },  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
