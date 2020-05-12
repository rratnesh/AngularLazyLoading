import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PagesGuard } from './guards/pages.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard]
  },
  {
    path: 'not-found', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
