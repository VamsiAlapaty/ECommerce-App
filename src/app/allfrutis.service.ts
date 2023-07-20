import { Injectable } from '@angular/core';
import { Fruits } from './data/fruitsList/fruits';

@Injectable({
  providedIn: 'root'
})
export class AllfrutisService {

  checklist:Fruits[] = [];

  constructor() { }

  getItem(){
    return this.checklist;
  }

  sendItem(value: any){
    if(this.checklist.includes(value)){
      value.count++
      // this.checklist.push(value);
    }else{
      this.checklist.push(value);
    }
  }

  getAll(): Fruits[]{
    return [
      {
        id: 1,
        name: 'Apple',
        price: 2.49,
        imageURL: 'assets/apple.jpg',
        count: 1
      },
      {
        id: 2,
        name: 'Oranges',
        price: 1.49,
        imageURL: 'assets/Oranges.jpg',
        count: 1
      },
      {
        id: 3,
        name: 'Bananas',
        price: 0.49,
        imageURL: 'assets/Bananas.jpg',
        count: 1
      },
      {
        id: 4,
        name: 'Dragon Fruit',
        price: 2.49,
        imageURL: 'assets/dragonFruit.jpg',
        count: 1
      },
      {
        id: 5,
        name: 'Strawberry',
        price: 2.49,
        imageURL: 'assets/strawberry.jpg',
        count: 1
      },
      {
        id: 6,
        name: 'Kiwi',
        price: 2.49,
        imageURL: 'assets/Kiwi.jpg',
        count: 1
      },
      {
        id: 7,
        name: 'Watermelon',
        price: 2.49,
        imageURL: 'assets/watermelon.jpg',
        count: 1
      },
      {
        id: 8,
        name: 'Grapes',
        price: 1.79,
        imageURL: 'assets/grapes.jpg',
        count: 1
      }
    ]
  }

}
