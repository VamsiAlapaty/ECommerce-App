import { Component, ViewChild } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  itemCount:number =  0;
  @ViewChild(CheckoutComponent) refCheckout!: CheckoutComponent;
  fruits = ['apples', 'oranges', 'bananas'];
  addItem(): void{
    this.itemCount++;
  }

  removeItem(event:any){
    this.itemCount = event;
  }
  remove(){
    this.refCheckout.removeItem();
  }
}
