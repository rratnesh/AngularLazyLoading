import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';
import { Content1Component } from './components/home/components/content1/content1.component';
import { Content2Component } from './components/home/components/content2/content2.component';
import { FormsModule } from '@angular/forms';
import { MoviesResolve } from '../guards/movies.resolve';
import { MoviesGuard } from '../guards/movies.guard';


const Routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, resolve: [MoviesResolve], canDeactivate: [MoviesGuard]
  },
  {
    path: 'checkout', component: CheckoutComponent,
  }
]

@NgModule({
  declarations: [HomeComponent, CheckoutComponent, Content1Component, Content2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    FormsModule
  ],
  providers: []
})
export class PagesModule { }
