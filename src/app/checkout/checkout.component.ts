import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AllfrutisService } from '../allfrutis.service';
import { Fruits } from '../data/fruitsList/fruits';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    @Input() addList:number = 0;
    @Output() updateItem = new EventEmitter();
    finalList:Fruits[] = [];
    display = true;
    sum = '';
    checkoutCount:boolean = false;

    constructor(private router: Router, private allf: AllfrutisService){}

    ngOnInit(){
      this.finalList = this.allf.getItem();
      if(this.finalList.length != 0){
        this.checkoutCount = true;
      }
      this.totalMethd();
    }

    totalMethd(){
      this.finalList.forEach((element) => {
        element.id = element.count * element.price;
      });

      this.finalPrice();
    }

    finalPrice(){
      let newarray: number[]= [];
      let value = 0;
      this.finalList.map((element) => {
          newarray.push(element.id);
      })

      value = newarray.reduce((partialSum, a) => partialSum + a, 0);

      this.sum = value.toFixed(2);
    }
    

    removeItem(){
      this.addList = Math.abs(this.addList - 1);
     this.updateItem.emit(this.addList);
    }

    totalAmount(){
      console.log(this.finalList);
    }

    navItem(){
      this.router.navigateByUrl('items');
    }
}
