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

    constructor(private router: Router, private allf: AllfrutisService){}

    ngOnInit(){
     this.finalList = this.allf.getItem();
    }

    removeItem(){
      this.addList = Math.abs(this.addList - 1);
     this.updateItem.emit(this.addList);
    }

    navItem(){
      this.router.navigateByUrl('items');
    }
}
