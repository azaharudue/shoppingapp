"use strict";
exports.__esModule = true;
exports.RecipeService = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../shared/ingredient.model");
var recipe_model_1 = require("./recipe.model");
var RecipeService = /** @class */ (function () {
    function RecipeService() {
        this.recipeSelected = new core_1.EventEmitter();
        this.recipes = [new recipe_model_1.Recipe('Stuffed Cabbage russian style', 'Meat-stuffed Cabbage Rolls', 'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg', [new ingredient_model_1.Ingredient('Cabbage', 1),
                new ingredient_model_1.Ingredient(' olive oil', 2),
                new ingredient_model_1.Ingredient('Beef', 1)]),
            new recipe_model_1.Recipe('Beef curry', 'Bangladeshi beef curry recipe ', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Beef_Curry_in_Bangladesh.jpg', [new ingredient_model_1.Ingredient('Beef', 2),
                new ingredient_model_1.Ingredient('Onion', 2)
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    return RecipeService;
}());
exports.RecipeService = RecipeService;
