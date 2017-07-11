import { Subject } from 'rxjs/Rx';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    // Subject that will tell the component that there is new data
    ingredientsChanged = new Subject<Ingredient[]>()
    // Use subject to send index of shopping-list to shopping-edit
    startedEditing = new Subject<number>();

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

    // Return ingredient from the ingredients array by index
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    // Add ingredient to shopping list
    addIngredient(ingredient: Ingredient) {
        // Push to ingredients array
        this.ingredients.push(ingredient);
        // Emit an event with .next and pass the ingredients array
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // Spread operator to turn the array into a list of single ingredients
        // Avoids the issue of pushing the whole array as an object
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    // Update existing ingredient by index
    updateIngredient(index: number, newIngredient: Ingredient) {
        // Get the ingredient that needs to be updated and set to the new ingredient
        this.ingredients[index] = newIngredient;
        // Emit updated ingredients
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    // Delete selected ingredient
    deleteIngredient(index: number) {
        // Remove from ingredients array by index
        this.ingredients.splice(index, 1);
        // Ingredients array has changed and emit updated array
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
