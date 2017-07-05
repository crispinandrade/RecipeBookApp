import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  // Inject RecipeService
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // Add the ingredients in the recipe to the shopping list component
  addToShoppingList() {
    // Access service and pass the selected recipe ingredients to the method
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
