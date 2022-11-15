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

  name: string = '';
  address: string = '';
  creditCard: string = '';

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

  removeItem(cartItem: CartItem) {
    this.cartService.setCart(this.cartItems.filter((x) => {
      return x.book.id !== cartItem.book.id
    }));
    alert("Book removed from cart");
  }

  nameChanged(name: string){
    console.log(name)
  }

  finalBuy() {
    alert("Order underway")
  }

}
