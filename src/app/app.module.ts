import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {APP_BASE_HREF} from "@angular/common";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/projects/enlightenment'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
