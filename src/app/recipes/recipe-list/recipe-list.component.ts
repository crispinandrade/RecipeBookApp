import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  // Inject the recipe service
  constructor(private recipeService: RecipeService) { }

  // Assigns the recipes array from the service to the local undefined recipes array
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
