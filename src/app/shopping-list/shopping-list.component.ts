import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Lettuce', 5),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Bun', 5),
    new Ingredient('Cheese', 5),
    new Ingredient('Beef patty', 5),
  ];

  constructor() { }

  ngOnInit() {
  }

  // Ingredient is the data passed from $event with name and amount
  onIngredientAdded(ingredient: Ingredient){
    // add the new ingredient to the ingredients array
    this.ingredients.push(ingredient);
  }

}
