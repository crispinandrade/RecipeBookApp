import { Injectable, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
// RecipeService will manage the recipes
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    // 'recipes' holds an array of Recipe objects
    private recipes: Recipe[] = [
        new Recipe(
            'Easy chocolate cake',
            'This easy chocolate cake recipe is made from simple pantry ingredients and is great for the newbie cook',
            'http://static.kidspot.com.au/recipe_asset/535/3635.jpg-20150515023316~q75,dx720y432u1r1gg,c--.jpg',
            [
                new Ingredient('self-raising flour', 1),
                new Ingredient('cocoa', 0.3),
                new Ingredient('Caster sugar', 1),
                new Ingredient('Butter', 0.3),
                new Ingredient('Milk', 0.5),
                new Ingredient('Eggs', 2),
            ]),
        new Recipe(
            '3 ingredient pineapple cake',
            'Can you believe this cake has only three ingredients?',
            'http://static.kidspot.com.au/recipe_asset/422/3410.jpg-20150309011751~q75,dx720y432u1r1gg,c--.jpg',
            [
                new Ingredient('self-raising flour', 2),
                new Ingredient('Crushed Pineapple', 2),
                new Ingredient('Caster sugar', 1)
            ])
    ];

    // Inject shopping list in the recipe service
    constructor(private shoppingListService: ShoppingListService) {}

    // Returns the recipes array so it can be accessed from outside
    getRecipes() {
        // slice() copies the array so the array really is not accessed
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        // Access shoppingListService and pass ingredients
        this.shoppingListService.addIngredients(ingredients);
    }
}
