import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // emit an event for whenever a recipe item is clicked
  // output the emitted event to recipes.component
  @Output() recipeSelected = new EventEmitter<void>()
  
  onSelected() {
    // Trigger 'recipeSelected' and emit
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
