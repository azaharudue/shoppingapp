"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DropdownnewDirective = void 0;
var core_1 = require("@angular/core");
var DropdownnewDirective = /** @class */ (function () {
    function DropdownnewDirective(elmRef) {
        this.elmRef = elmRef;
        this.isOpen = false;
    }
    DropdownnewDirective.prototype.toggleOpen = function (event) {
        this.isOpen = this.elmRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    };
    __decorate([
        core_1.HostBinding('class.open')
    ], DropdownnewDirective.prototype, "isOpen");
    __decorate([
        core_1.HostListener('document:click', ['$event'])
    ], DropdownnewDirective.prototype, "toggleOpen");
    DropdownnewDirective = __decorate([
        core_1.Directive({
            selector: '[appDropdown1]'
        })
    ], DropdownnewDirective);
    return DropdownnewDirective;
}());
exports.DropdownnewDirective = DropdownnewDirective;
