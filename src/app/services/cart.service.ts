import { Injectable } from '@angular/core';
import {CartItem} from "../models/CartItem";
import {BehaviorSubject, Observable} from "rxjs";
import {Book} from "../models/Book";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  private _cartItems$ = this.cartItems.asObservable();

  constructor() { }

  getCart(): Observable<CartItem[]>{
    return this._cartItems$;
  }

  addToCart(cartItems: CartItem[]){
    return this.cartItems.next(cartItems);
  }

}
