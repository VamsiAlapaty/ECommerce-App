import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  itemCount:number =  0;

  addItem(){
    this.itemCount++;
  }

  removeItem(event:any){
    this.itemCount = event;
  }
}
