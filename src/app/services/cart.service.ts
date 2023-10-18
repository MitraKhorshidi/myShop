import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private snackBar: MatSnackBar) { }

  addToCart(cartItem: CartItem) {

    const items = [...this.cart.value.items];

    const itemInCart = items.find((item) => item.id === cartItem.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(cartItem);
    }

    this.cart.next({ items });
    this.snackBar.open('One item added to cart!', 'OK', { duration: 4000 });
    console.log(items);

  }

  getTotal(items: CartItem[]): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this.snackBar.open('Cart is cleared!', 'OK', { duration: 2000 })
  }

  removeFromCart(item: CartItem): void {
    const filteredItems =this.cart.value.items.filter((it) => it.id != item.id);
    this.cart.next({ items: filteredItems });
    console.log('filter',filteredItems)
    this.snackBar.open('One item is removed from the cart!', 'Ok', { duration: 2000 });
  }

  removeQuantity(item: CartItem): void {
    const filteredItems = this.cart.value.items
      .map((it) => {
        if (it.id === item.id) {
          it.quantity -= 1;
        }
        return item;
      })
      .filter((it) => it.quantity>0);
    
      this.cart.next({items:filteredItems});
  }
}
