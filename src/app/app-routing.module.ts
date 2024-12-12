import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './produits/produits.component';
import { CartComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', component: ProductsComponent }, 
  { path: 'cart', component: CartComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
