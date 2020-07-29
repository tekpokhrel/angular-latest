import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:any = [];

  constructor( private http: HttpClient ) { }

  addToCart(product) {
    this.items.push(product);
    console.log("total item in cart", this.items);
  }

  getCartItem() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrice() {
    return this.http.get('/assets/shipping.json');
  }
}
