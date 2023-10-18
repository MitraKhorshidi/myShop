import { Component , Input , Output , EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() fullWidthMode : boolean = false;
  @Input() product? : Product ;
  @Output() addtoCart = new EventEmitter<Product>();

  onAddToCart():void{
    this.addtoCart.emit(this.product);
  }

}
