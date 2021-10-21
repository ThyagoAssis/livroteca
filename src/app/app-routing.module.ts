import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), canActivate: [LoginGuard]
  },

  {
    path: 'footer',
    loadChildren: () => import('./componentes/footer/footer.module').then(m => m.FooterModule), canActivate: [AuthGuard]
  },

  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule), canActivate: [AuthGuard]
  },
  /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, */
  /* {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'book',
    loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule), canActivate: [AuthGuard]
  }, */
  /*  {
     path: 'login',
     loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
   }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
