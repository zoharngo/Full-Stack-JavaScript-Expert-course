import { Component, OnInit } from '@angular/core';
import { PizzeriaService } from '../shared/services/pizzeria-service.service';
import { Pizza } from '../shared/models/pizza.model';

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  title = "Current Pizza Orders";
  pizzaCollection: Array<Pizza>;

  constructor(private _pizzeriaService: PizzeriaService) { }

  ngOnInit() { 
    this.pizzaCollection = this._pizzeriaService.getPizzas();
  }

}
