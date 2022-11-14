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
import { BookDetailedComponent } from './book-detailed/book-detailed.component';
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    BooksComponent,
    BookComponent,
    BookDetailedComponent,
    CheckoutComponent,
    CheckoutItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/projects/enlightenment'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
