import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/CartItem";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((res) => {
      this.cartItems = res;
    })
  }

}
