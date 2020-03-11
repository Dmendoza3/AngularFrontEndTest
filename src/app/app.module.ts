import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { insert } from './insert/insert';
import { get } from './get/get';
import { menu } from './menu/menu';
import { login } from './login/login';
import { NotFound } from './404/404';
import { AppRoutingModule } from './app.routing';
import { service } from './app.service';


@NgModule({
  declarations: [
    AppComponent, 
    insert,
    get,
    menu,
    login,
    NotFound
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [service],
  bootstrap: [AppComponent]
})
export class AppModule { }
