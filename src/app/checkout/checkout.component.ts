import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/CartItem";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];

  totalCartAmount = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((res) => {
      this.cartItems = res;
    });

    this.cartService.getCart().subscribe((res) => {
      this.totalCartAmount = res.reduce((acc, curr) => {
        acc += (curr.amount * curr.book.price);
        return acc;
      }, 0)
    });
  }

  finalBuy() {
    alert("Order underway")
  }

}
