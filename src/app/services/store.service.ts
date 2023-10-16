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

  getAllProducts(limit: 12, sort: 'desc'): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(`${BASE_URL}?limit=${limit}&sort=${sort}`);
  }
}
