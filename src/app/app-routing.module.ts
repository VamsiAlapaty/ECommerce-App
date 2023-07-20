import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDataComponent } from './todo-data/todo-data.component';
import { ItemsComponent } from './items/items.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo:'items', pathMatch: 'full'},
  { path:'items', component: ItemsComponent},
  { path:'checkout', component: CheckoutComponent},
  { path:'todoList', component: TodoDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
