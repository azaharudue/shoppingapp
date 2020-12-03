import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService{
    recipeSelected  = new EventEmitter<Recipe>();
    private recipes: Recipe [] = [new Recipe ('Stuffed Cabbage russian style',
     'Meat-stuffed Cabbage Rolls',
      'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg',
      [new Ingredient('Cabbage', 1),
      new Ingredient (' olive oil', 2),
      new Ingredient('Beef', 1)])
    , new Recipe ('Beef curry',
    'Bangladeshi beef curry recipe ', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Beef_Curry_in_Bangladesh.jpg',
    [new Ingredient('Beef', 2),
    new Ingredient('Onion', 2)
    ])
    ];
    constructor(private slService: ShoppingListService){}
    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }
    getRecipe(id: number) {
        return this.recipes[id];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]): void{
        this.slService.addIngredients(ingredients);
    }
}
