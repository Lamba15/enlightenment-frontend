import { Component, OnInit } from '@angular/core';
import {Book} from "../models/Book";
import { BookService } from "../services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res => {
      this.books = res;
    });

  }

}
