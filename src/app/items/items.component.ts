import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';
import { Fruits } from '../data/fruitsList/fruits';
import { AllfrutisService } from '../allfrutis.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  itemCount:number =  0;
  fruits: Fruits[] = [];

  @ViewChild(CheckoutComponent) refCheckout!: CheckoutComponent;

  constructor( private allf: AllfrutisService){
  }

  ngOnInit(): void { 
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fruits = this.allf.getAll();
  }

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
