import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  category?: string;
  colsCount: number = 3;
  products: Array<Product> = [];
  limit: number = 12;
  sort: string = 'asc';
  productSubscription?: Subscription;

  constructor(private catServive: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productSubscription = this.storeService.getAllProducts(this.limit, this.sort , this.category)
      .subscribe((next) => this.products = next);
  }

  onCoulumsCountChange(newColsCount: number) {
    this.colsCount = newColsCount;
  }

  onChangeCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
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

  onLimitChange(newLimit:number):void{
    this.limit=newLimit;
    this.getProducts();
  }

  onSortChange(newSort:string):void{
    this.sort=newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription?.unsubscribe();
    }
  }

}
