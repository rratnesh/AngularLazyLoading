import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { TokenInterceptor } from './interceptors/http.interceptor';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CreditCardDirective } from './directives/credit-card.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
