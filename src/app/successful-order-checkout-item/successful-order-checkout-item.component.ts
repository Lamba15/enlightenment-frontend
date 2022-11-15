import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../models/CartItem";

@Component({
  selector: 'app-successful-order-checkout-item',
  templateUrl: './successful-order-checkout-item.component.html',
  styleUrls: ['./successful-order-checkout-item.component.css']
})
export class SuccessfulOrderCheckoutItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  constructor() {
    this.cartItem = {
      book: {
        id: 0,
        visits: 0,
        stock: 0,
        description: "",
        price: 0,
        name: "",
        author: "",
        imageUrl: "",
        dateCreated: "",
      },
      amount: 0,
    };
  }

  ngOnInit(): void {

  }

}
