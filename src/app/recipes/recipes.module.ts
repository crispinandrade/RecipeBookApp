import { RecipeNewComponent } from './recipe-new/recipe-new.component';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
   declarations: [
      RecipesComponent,
      RecipeStartComponent,
      RecipeListComponent,
      RecipeEditComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      RecipeNewComponent
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      RecipesRoutingModule,
      SharedModule
   ]
})
export class RecipesModule {}