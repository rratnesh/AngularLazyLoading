import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesGuard } from '../guards/pages.guard';
import { ChildComponent } from './login/child/child.component';


const Routes: Routes = [
  {
    path: '', redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent, canActivateChild: [PagesGuard],
    children: [
      { path: 'child', component: ChildComponent }
    ]
  },
  {
    path: 'register', component: RegisterComponent
  }
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthModule { }
