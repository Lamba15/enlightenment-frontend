import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {APP_BASE_HREF} from "@angular/common";
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    BooksComponent,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/projects/enlightenment'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
