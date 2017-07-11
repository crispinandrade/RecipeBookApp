import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Defining routes
const appRoutes: Routes = [
   // Home that redirects to recipes page
   {path: '', redirectTo: '/recipes', pathMatch: 'full'},
   // Recipes
   {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
   ]},
   // Shopping List
   {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   // Exporting to app.module
   exports: [RouterModule]
})
export class AppRoutingModule {

}