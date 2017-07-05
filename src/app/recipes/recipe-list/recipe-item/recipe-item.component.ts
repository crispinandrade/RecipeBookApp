import { RecipeService } from '../../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  // Inject RecipeService
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
  // Use recipeSelected from recipeService to emit the recipe selected
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
