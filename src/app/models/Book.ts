export class Book {
  id: number;
  name: string;
  author: string;
  description: string
  price: number;
  imageUrl: string;
  stock: number;
  dateCreated: string;
  visits: number;


  constructor() {
    this.id = 1
    this.name = ''
    this.author = ''
    this.description = ''
    this.price = 0
    this.imageUrl = ""
    this.stock = 0
    this.dateCreated = ''
    this.visits = 0
  }
}
