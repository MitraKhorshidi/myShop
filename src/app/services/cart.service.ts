import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private snackBar :MatSnackBar) { }

  addToCart(cartItem: CartItem) {

    const items = [...this.cart.value.items];

    const itemInCart = items.find((item) => item.id === cartItem.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(cartItem);
    }

    this.cart.next({items});
    this.snackBar.open('One item added to cart!' , 'OK' , {duration: 4000});
    console.log(items);

  }
}