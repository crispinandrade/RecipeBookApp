import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { selector } from 'rxjs/operator/multicast';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    // Check if route params have changed
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // Editing mode or not
        // Check if params has an id property otherwise returns false
        this.editMode = params['id'] != null;
        // If route params change then call initForm() to create form
        this.initForm();
      }
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    // Decide what value should be if edit mode
    if (this.editMode) {
      // Get the recipe to edit by service method
      const recipe = this.recipeService.getRecipe(this.id)
      // Assign recipe values from service
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      // Check if ingredients actually has ingredients
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                 Validators.required,
                 Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
            })
          );
        }
      }
    }

    // Forms frame of elements
    this.recipeForm = new FormGroup({
      // Control key-value pairs
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
    })
  }

  // Save or Update recipes
  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      // UPDATE
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      // SAVE
      this.recipeService.addReceipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    // Get access to the ingredients array of controls and push a new ingredient
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
                 Validators.required,
                 Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
      })
    )
  }

  onCancel() {
    // Navigate away with router
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
