import {Component, OnInit} from '@angular/core';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {CartService} from "../services/cart.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  faCart = faShoppingCart;

  totalCartAmount = 0;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((res) => {
      this.totalCartAmount = res.reduce((acc, curr) => {
        acc += (curr.amount * curr.book.price);
        return acc;
      }, 0)
    })
  }

}
