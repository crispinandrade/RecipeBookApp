import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Defining routes
const appRoutes: Routes = [
   // Home that redirects to recipes page
   {path: '', redirectTo: '/recipes', pathMatch: 'full'},
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