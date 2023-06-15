import { Injectable } from '@angular/core';
import { Fruits } from './data/fruitsList/fruits';

@Injectable({
  providedIn: 'root'
})
export class AllfrutisService {

  constructor() { }

  getAll(): Fruits[]{
    return [
      {
        id: 1,
        name: 'Apple',
        price: 2.49,
        imageURL: 'assets/apple.jpg'
      },
      {
        id: 2,
        name: 'Oranges',
        price: 1.49,
        imageURL: 'assets/Oranges.jpg'
      },
      {
        id: 3,
        name: 'Bananas',
        price: 0.49,
        imageURL: 'assets/Bananas.jpg'
      },
      {
        id: 4,
        name: 'Dragon Fruit',
        price: 2.49,
        imageURL: 'assets/dragonFruit.jpg'
      },
      {
        id: 5,
        name: 'Strawberry',
        price: 2.49,
        imageURL: 'assets/strawberry.jpg'
      },
      {
        id: 6,
        name: 'Kiwi',
        price: 2.49,
        imageURL: 'assets/Kiwi.jpg'
      },
      {
        id: 7,
        name: 'Watermelon',
        price: 2.49,
        imageURL: 'assets/watermelon.jpg'
      },
      {
        id: 8,
        name: 'Grapes',
        price: 1.79,
        imageURL: 'assets/grapes.jpg'
      }
    ]
  }

}
