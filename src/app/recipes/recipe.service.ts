import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected  = new EventEmitter<Recipe>();
    private recipes: Recipe [] = [new Recipe ('A test Recipe', 'Test description', 'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg')
    , new Recipe ('Beef curry', 'Beef curry  description ', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Beef_Curry_in_Bangladesh.jpg')
    ];
    getRecipe(){
        return this.recipes.slice();
    }
}
