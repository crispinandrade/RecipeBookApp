import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes holds an array of Recipe objects
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Tasty sandwich', 'http://www.webweaver.nu/clipart/img/misc/food/fast-food/hamburger.png'),
    new Recipe('Hamburger #2', 'Tasty sandwich', 'http://www.webweaver.nu/clipart/img/misc/food/fast-food/hamburger.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
