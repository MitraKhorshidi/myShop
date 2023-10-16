import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  category: string = 'z';
  colsCount: number = 3;

  constructor(private catServive: CartService) { }

  onCoulumsCountChange(newColsCount: number) {
    this.colsCount = newColsCount;
  }

  onChangeCategory(newCategory: string): void {
    this.category = newCategory;
  }
  onAddToCart(product: Product): void {
    this.catServive.addToCart({
      id: product.id,
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1
    });
  }

}
