import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdHttpServiceService {

  constructor(private httpClient: HttpClient) { }


  getProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }

  getProductDetails(prodId) {
    return this.httpClient.get(`https://fakestoreapi.com/products/${prodId}`);
  }
}
