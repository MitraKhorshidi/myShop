import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [{
      product: 'https://placehold.co/150',
      id: 1,
      price: 150,
      name: 'Nike',
      quantity: 1,
    },
    {
      product: 'https://placehold.co/150',
      id: 1,
      price: 150,
      name: 'Nike',
      quantity: 1,
    },
    {
      product: 'https://placehold.co/150',
      id: 1,
      price: 150,
      name: 'Nike',
      quantity: 1,
    },]
  };

  dataSource: Array<CartItem> = []
  columnsToDisplay: Array<string> = [
    'product', 'name', 'price', 'quantity', 'total', 'action'
  ]

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  getTotal(): number {
    return this.cartService.getTotal(this.cart.items);
  }

}
