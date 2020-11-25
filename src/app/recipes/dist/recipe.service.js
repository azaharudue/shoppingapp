"use strict";
exports.__esModule = true;
exports.RecipeService = void 0;
var core_1 = require("@angular/core");
var recipe_model_1 = require("./recipe.model");
var RecipeService = /** @class */ (function () {
    function RecipeService() {
        this.recipeSelected = new core_1.EventEmitter();
        this.recipes = [new recipe_model_1.Recipe('A test Recipe', 'Test description', 'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg'),
            new recipe_model_1.Recipe('Beef curry', 'Beef curry  description ', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Beef_Curry_in_Bangladesh.jpg')
        ];
    }
    RecipeService.prototype.getRecipe = function () {
        return this.recipes.slice();
    };
    return RecipeService;
}());
exports.RecipeService = RecipeService;
