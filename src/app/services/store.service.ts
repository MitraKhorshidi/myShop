import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit: number = 12, sort: string = 'desc' , category?:string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${BASE_URL}${ category ? '/category/'+category : ''}?limit=${limit}&sort=${sort}`);
  }

  getAllCategories():Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(`${BASE_URL}/categories`);
  }
}
