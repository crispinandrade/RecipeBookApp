import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    // An event emitter that will tell the component that there is new data
    ingredientsChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Lettuce', 5),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Bun', 5),
        new Ingredient('Cheese', 5),
        new Ingredient('Beef patty', 5),
    ];

    // Returns the ingredients array so it can be accessed from outside
    getIngredients() {
        // slice() copies the array so the array really is not accessed
        return this.ingredients.slice();
    }

    // Add ingredient to shopping list
    addIngredient(ingredient: Ingredient) {
        // Push to ingredients array
        this.ingredients.push(ingredient);
        // Emit an event and pass the ingredients array
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // Spread operator to turn the array into a list of single ingredients
        // Avoids the issue of pushing the whole array as an object
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
