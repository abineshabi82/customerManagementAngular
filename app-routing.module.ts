import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCartViewComponent} from './customer-cart-view/customer-cart-view.component';
import {CustomerOrderComponent} from './customer-order/customer-order.component';
import {CustomerListViewComponent} from './customer-list-view/customer-list-view.component';
import { CustomerMapViewComponent } from './customer-map-view/customer-map-view.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerOrderViewComponent } from './customer-order-view/customer-order-view.component';
const routes: Routes = [
  {path:'customerInfo',redirectTo:"customerInfo/customerInfoDetails",pathMatch:'full'},
  {path:'customerView',component:CustomerViewComponent,
  children:[
  {path:'cartView',component:CustomerCartViewComponent},
  {path:'listView',component:CustomerListViewComponent},
  {path:'mapView',component:CustomerMapViewComponent},
  {path:'addCustomer',component:AddCustomerComponent}]
},
{path:'customerInfo',component:CustomerInfoComponent,
children:[
  {path:'customerOrderView',component:CustomerOrderViewComponent},
  {path:'customerInfoDetails',component:CustomerMapViewComponent},
  {path:'customerUpdate',component:CustomerUpdateComponent}
  
]},

  {path:'customerView',redirectTo: "customerView/cartView",pathMatch: 'full'},
  {path:'orderView',component:CustomerOrderComponent},
  {path:'search',redirectTo:"customerView/cartView",pathMatch:'full'},
  {path: '',redirectTo: "customerView/cartView",pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent=[
  CustomerCartViewComponent,
  CustomerOrderComponent,
  CustomerListViewComponent,
  CustomerMapViewComponent,
  AddCustomerComponent,
  CustomerInfoComponent,
  CustomerOrderViewComponent];