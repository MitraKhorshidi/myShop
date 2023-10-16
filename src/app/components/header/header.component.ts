import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  itemsQuantity: number = 0;
  private _cart: Cart = { items: [] };

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }


  constructor(private cartService:CartService){}

  getTotal():number{
    return this.cartService.getTotal(this._cart.items);
  }

  onClearCart():void{
    this.cartService.clearCart();
  }

}
