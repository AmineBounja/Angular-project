import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  addProduct(product: any) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  removeProduct(product: any) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  getTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
