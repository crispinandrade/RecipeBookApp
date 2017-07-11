import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  id: number;

  // Inject RecipeService
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Subscribe to params observable 
    this.route.params.subscribe(
      // React to changes in the route params
      (params: Params) => {
        // Store received id to this.id and convert the string to a number
        this.id = +params['id'];
        // Get new recipe
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  // Add the ingredients in the recipe to the shopping list component
  addToShoppingList() {
    // Access service and pass the selected recipe ingredients to the method
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    // Navigate away with router
    this.router.navigate(['../'], {relativeTo: this.route})
   }

}
