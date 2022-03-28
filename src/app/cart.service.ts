import { Injectable } from '@angular/core';
import { productObject } from './productObject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: productObject[] = [];

  // tslint:disable-next-line: no-shadowed-variable
  addToCart(product: productObject): void{
    this.items.push(product);
  }

  getItems(): any{
    return this.items;
  }

  clearCart(): any{
    this.items = [];
    return this.items;
  }
  constructor() { }
}
