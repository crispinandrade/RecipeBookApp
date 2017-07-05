import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // Listener for reicipeSelected
    // Informed about changes using subscribe()
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        // Set selectedRecipe to the recipe received from the event
        this.selectedRecipe = recipe;
      }
    );
  }

}
