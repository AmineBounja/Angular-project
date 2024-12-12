import { Component, OnInit } from '@angular/core'; 
import { CartService } from '../panier.service';

@Component({
  selector: 'app-cart',
  standalone:false,
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'] 
})
export class CartComponent implements OnInit {  
  cartItems: any[] = []; 
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();  
  }

removeFromCart(product: any) {
    this.cartService.removeProduct(product);
    this.cartItems = this.cartService.getCart();  
  }

  getTotal() {
    return this.cartService.getTotal();  
  }
}
