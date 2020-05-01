import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Routes, RouterModule } from '@angular/router';


const Routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  }
]

@NgModule({
  declarations: [HomeComponent, CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class PagesModule { }
