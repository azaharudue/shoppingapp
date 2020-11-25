"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeListComponent = void 0;
var core_1 = require("@angular/core");
var recipe_service_1 = require("../recipe.service");
var recipe_model_1 = require("../recipe.model");
var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
        this.recipes = [new recipe_model_1.Recipe('A test Recipe', 'Test description', 'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg'),
            new recipe_model_1.Recipe('Beef curry', 'Beef curry  description ', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Beef_Curry_in_Bangladesh.jpg')
        ];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeService.getRecipe();
    };
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'app-recipe-list',
            templateUrl: './recipe-list.component.html',
            styleUrls: ['./recipe-list.component.css'],
            providers: [recipe_service_1.RecipeService]
        })
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
