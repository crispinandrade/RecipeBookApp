import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Defining routes
const appRoutes: Routes = [
   // Home that redirects to recipes page
   {path: '', component: HomeComponent},
   // Lazy load
   {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
   // Shopping List
   {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes,  {preloadingStrategy: PreloadAllModules})],
   // Exporting to app.module
   exports: [RouterModule]
})
export class AppRoutingModule {

}