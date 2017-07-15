import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipesRoutes: Routes = [
   // Recipes
   {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
   ]},
];

@NgModule({
   imports: [
      RouterModule.forChild(recipesRoutes)
   ],
   exports: [RouterModule]
})
export class RecipesRoutingModule {}

