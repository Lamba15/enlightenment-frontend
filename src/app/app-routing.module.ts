import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {BookDetailedComponent} from "./book-detailed/book-detailed.component";
import {CheckoutComponent} from "./checkout/checkout.component";


const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'book-detailed', component: BookDetailedComponent,
    children: [
      { path: '**', component: BookDetailedComponent}
    ]
  },
  {path: 'checkout', component: CheckoutComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
