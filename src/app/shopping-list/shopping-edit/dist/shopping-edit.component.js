"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingEditComponent = void 0;
var core_1 = require("@angular/core");
var ingredient_model_1 = require("../../shared/ingredient.model");
var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(slService) {
        this.slService = slService;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent.prototype.onAddItem = function () {
        var ingName = this.nameInputRef.nativeElement.value;
        var ingAmount = this.amountInputRef.nativeElement.value;
        var newIngredient = new ingredient_model_1.Ingredient(ingName, ingAmount);
        this.slService.addIngredients(newIngredient);
    };
    __decorate([
        core_1.ViewChild('nameInput', { static: false })
    ], ShoppingEditComponent.prototype, "nameInputRef");
    __decorate([
        core_1.ViewChild('amountInput', { static: false })
    ], ShoppingEditComponent.prototype, "amountInputRef");
    ShoppingEditComponent = __decorate([
        core_1.Component({
            selector: 'app-shopping-edit',
            templateUrl: './shopping-edit.component.html',
            styleUrls: ['./shopping-edit.component.css']
        })
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());
exports.ShoppingEditComponent = ShoppingEditComponent;
