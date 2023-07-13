import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDataComponent } from './todo-data/todo-data.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: '', redirectTo:'items', pathMatch: 'full'},
  { path:'items', component: ItemsComponent},
  { path:'todoList', component: TodoDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
