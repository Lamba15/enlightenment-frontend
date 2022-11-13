import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../models/Book";
import { Router } from '@angular/router';
import { BookService } from "../services/book.service";


@Component({
  selector: 'app-book-detailed',
  templateUrl: './book-detailed.component.html',
  styleUrls: ['./book-detailed.component.scss']
})
export class BookDetailedComponent implements OnInit {

  amount: number = 1

  books: Book[] = [];

  book: Book = {
    id: 0,
    imageUrl: "",
    author: "",
    price: 0,
    description: "",
    name: "",
    visits: 0,
    stock: 0,
    dateCreated: ""
  }

  constructor(private router: Router, private bookService: BookService) {

  }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe(res => {
      this.books = res;

      let selectedBook = this.books.find((x) => x.id === parseInt(this.router.url.split('/')[this.router.url.split('/').length - 1]))

      if (selectedBook){
        this.book = selectedBook;
      }
    });




  }

  addToCart(){

  }

}
