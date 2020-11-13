"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BetterHighlightDirective = void 0;
var core_1 = require("@angular/core");
var BetterHighlightDirective = /** @class */ (function () {
    function BetterHighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    BetterHighlightDirective.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    };
    BetterHighlightDirective.prototype.mouseover = function (eventData) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    };
    BetterHighlightDirective.prototype.mouseleave = function (eventData) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    };
    __decorate([
        core_1.HostListener('mouseenter')
    ], BetterHighlightDirective.prototype, "mouseover");
    __decorate([
        core_1.HostListener('mouseleave')
    ], BetterHighlightDirective.prototype, "mouseleave");
    BetterHighlightDirective = __decorate([
        core_1.Directive({
            selector: '[appBetterHighlight]'
        })
    ], BetterHighlightDirective);
    return BetterHighlightDirective;
}());
exports.BetterHighlightDirective = BetterHighlightDirective;
