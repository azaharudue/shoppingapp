import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { BasicHighlightDirective } from './shared/directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  RecipesComponent,
  RecipeListComponent,
  RecipeDetailComponent,
  ShoppingListComponent,
  ShoppingEditComponent,
  RecipeItemComponent,
  BasicHighlightDirective,
  BetterHighlightDirective,
  UnlessDirective,
  DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
