import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  category:string = 'z';
  colsCount :number = 3;

  onCoulumsCountChange(newColsCount:number){
    this.colsCount = newColsCount;
  }

  onChangeCategory(newCategory:string):void{
    this.category=newCategory;
  }
  onAddToCart(product:Product):void{}

}
