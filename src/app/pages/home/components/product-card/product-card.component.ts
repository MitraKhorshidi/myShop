import { Component , Input , Output , EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() fullWidthMode : boolean = false;
  @Output() addtoCart = new EventEmitter<Product>();
  product :Product ={
    id:1,
    title:'Skeatures',
    price: 150,
    category: 'shoes',
    description:'Some desc for the product',
    image:"https://placehold.co/150",

  }

  onAddToCart():void{
    this.addtoCart.emit(this.product);
  }

}
