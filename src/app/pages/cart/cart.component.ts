import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((next) => this.cart = next);
  }

  getTotal(): number {
    return this.cartService.getTotal(this.cart.items);
  }

  onClearCart():void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item : CartItem):void{
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item :CartItem):void{
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item:CartItem):void{
    this.cartService.removeQuantity(item);
  }

}
