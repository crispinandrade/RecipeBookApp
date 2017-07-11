import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  // Inject the recipe service
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  // Assigns the recipes array from the service to the local undefined recipes array
  ngOnInit() {
    // Listen to the recipesChanged event
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        // Get the updated recipes
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    // Called once, before the instance is destroyed
    // Add 'implements OnDestroy' to the class
    this.subscription.unsubscribe();
  }
}
