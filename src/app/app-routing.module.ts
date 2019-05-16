import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  loadChildren:'./pages/home/home.module#HomeModule',
  pathMatch:'full'
},
{
  path:'products',
  loadChildren:'./pages/products/products.module#ProductsModule'
},
{
  path:'checkout',
  loadChildren:'./pages/checkout/checkout.module#CheckoutModule'
},
{
  path:'cart',
  loadChildren:'./pages/cart/cart.module#CartModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
