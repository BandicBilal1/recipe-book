import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './header/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
