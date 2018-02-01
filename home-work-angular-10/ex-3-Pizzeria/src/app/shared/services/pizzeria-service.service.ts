import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzeriaService {

  private _pizzaCollection: Array<Pizza>;

  constructor() {
    this._pizzaCollection = new Array<Pizza>();
  }

  _getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public getPizzas(): Array<Pizza> {
    for (let i: number = 0; i < 100; i++) {
      let diameter = this._getRandomInt(10, 50);
      let slices = this._getRandomInt(3, 8);
      let toppings = this._getRandomInt(10, 50);
      let price = (toppings * 5) + diameter;

      this._pizzaCollection.push(new Pizza(diameter, slices, toppings, price));
    }
    return this._pizzaCollection;
  }

}
