import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [] };

  columnsToDisplay: Array<string> = [
    'product', 'name', 'price', 'quantity', 'total', 'action'
  ]

  constructor(
    private cartService: CartService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((next) => this.cart = next);
  }

  getTotal(): number {
    return this.cartService.getTotal(this.cart.items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void {
    this.httpClient.post(
      'https://localhost:4242/checkout',
      { items: this.cart.items }
    ).subscribe(async (res: any) => {
      const stripe = await loadStripe('pk_test_51O4OJGLekufMvvrogb5j8xEBv5fqYasIP6nvh2GFJvTy82cj6KoyhLL2vvzrXkadZxUX5B8BcWQd5YIkBNnErw2g00ER9wS0fZ');
      stripe?.redirectToCheckout({
        sessionId: res.id
      });
    });
  }

}
