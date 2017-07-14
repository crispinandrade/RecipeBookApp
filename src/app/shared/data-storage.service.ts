import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
   constructor(private http: Http,
               private recipeService: RecipeService,
               private authService: AuthService) {}

   storeRecipes() {
      // Get token from authService
      const token = this.authService.getToken();
      // Method called will only give an observable
      return this.http.put('https://recipe-book-d0ea6.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
   }

   fetchRecipes() {
      // Get token from authService
      const token = this.authService.getToken();

      // Query token in the get request to the database
      this.http.get('https://recipe-book-d0ea6.firebaseio.com/recipes.json?auth=' + token)
      // Transform the data with .map
      .map(
         (response: Response) => {
            const recipes: Recipe[] = response.json();
            // Make sure each recipe contains an ingredients property
            for (let recipe of recipes) {
               if (!recipe['ingredients']) {
                  console.log(recipe);
                  // Assign an empty array so at least we can save the property
                  recipe['ingredients'] = [];
               }
            }
            return recipes;
         }
      )
      .subscribe(
         (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
         }
      );
   }
}
