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
var ingredient_model_1 = require("src/app/shared/ingredient.model");
var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent() {
        this.ingredientEvent = new core_1.EventEmitter();
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent.prototype.onClickAdd = function () {
        var newName = this.inputName.nativeElement.value;
        var newAmount = this.inputAmount.nativeElement.value;
        var newIngredient = new ingredient_model_1.Ingredient(newName, newAmount);
        this.ingredientEvent.emit(newIngredient);
    };
    __decorate([
        core_1.Output()
    ], ShoppingEditComponent.prototype, "ingredientEvent");
    __decorate([
        core_1.ViewChild('inputName', { static: false })
    ], ShoppingEditComponent.prototype, "inputName");
    __decorate([
        core_1.ViewChild('inputAmount', { static: false })
    ], ShoppingEditComponent.prototype, "inputAmount");
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
