import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategories():Observable<any> {
    console.log('fjghjkdfhg');
    let url = 'http://localhost:8000/api/category';
    return this
      .http
      .get(url);
  }

  getProducts(catID: string):Observable<any>{
    let url = 'http://localhost:8000/api/category/'+catID+'/products';
    return this
    .http
    .get(url);
  }

  
}

export interface ProductInterface {
  name: string;
  price: string;
}

export interface CategoryInterface {
  name: string;
  id: string;
}
