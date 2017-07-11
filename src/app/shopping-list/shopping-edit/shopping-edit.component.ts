import { Subscription } from 'rxjs/Rx';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // Listening for index from shopping-list
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        // Started editing was triggered
        this.editMode = true;
        this.editedItemIndex = index;
        // Get ingredient by index from the service and store to editedItem
        this.editedItem = this.shoppingListService.getIngredient(index);
        // Set value from editedItem values
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // Updating
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      // Adding
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  // Clear edit form
  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  // Delete an item on shopping list
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  // Called once, before the instance is destroyed.
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
