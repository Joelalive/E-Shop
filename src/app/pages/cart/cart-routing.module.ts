import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:CartComponent,
  pathMatch: 'full'
},{
  path:'cart_details',
  component:CartDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
