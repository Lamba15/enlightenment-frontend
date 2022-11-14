import {Book} from "./Book";

export class CartItem{
  amount: number;
  book: Book;

  constructor() {
    this.book = new Book();
    this.amount = 0
  }
}
