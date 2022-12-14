import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../models/CartItem";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss'],
})
export class CheckoutItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  @Output() removeFromCart = new EventEmitter();

  cartItems: CartItem[];

  constructor(private cartService: CartService) {
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

    this.cartItems = []
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((res) => {
      this.cartItems = res;
    });
  }



}
