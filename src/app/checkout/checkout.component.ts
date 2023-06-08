import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    @Input() addList:number = 0;
    @Output() updateItem = new EventEmitter();

    removeItem(){
      this.addList = Math.abs(this.addList - 1);
     this.updateItem.emit(this.addList);
    }
}
