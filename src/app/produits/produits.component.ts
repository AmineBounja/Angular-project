import { Component } from '@angular/core';
import { CartService } from '../panier.service'; 

@Component({
  selector: 'app-products',
  standalone:false,
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProductsComponent {
  products = [
    { name: 'Ray-ban', price: 50, image: 'assets/images/rayban.jpg' },
    { name: 'Cartier', price: 55, image: 'assets/images/images (1).jpeg' },
    { name: 'Lacoste', price: 70, image: 'assets/images/lacoste.jpeg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addProduct(product);
    alert(`${product.name} a été ajouté au panier !`);
  }
}
