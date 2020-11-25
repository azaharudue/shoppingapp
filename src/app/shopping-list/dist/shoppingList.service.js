"use strict";
exports.__esModule = true;
exports.ShoppinglistService = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../shared/ingredient.model");
var ShoppinglistService = /** @class */ (function () {
    function ShoppinglistService() {
        this.ingredientsChanged = new core_1.EventEmitter();
        this.ingredients = [
            new ingredient_model_1.Ingredient('Egg', 10),
            new ingredient_model_1.Ingredient('Apple', 5)
        ];
    }
    ShoppinglistService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppinglistService.prototype.addIngredients = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    };
    return ShoppinglistService;
}());
exports.ShoppinglistService = ShoppinglistService;
