import { Component, OnInit, Input } from '@angular/core';
import { Book } from "../models/Book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor() {
    this.book = {
      id: 0,
      visits: 0,
      stock: 0,
      imageUrl: "",
      price: 0,
      description: "",
      author: '',
      dateCreated: "",
      name: ''
    }
  }

  ngOnInit(): void {
  }

}
