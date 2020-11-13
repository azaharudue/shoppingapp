import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() ingredientEvent = new EventEmitter<Ingredient>();
@ViewChild('inputName', {static: false})inputName: ElementRef;
@ViewChild('inputAmount', {static: false})inputAmount: ElementRef;
constructor() { }
  ngOnInit(): void {
  }
  onClickAdd(): void{
    const newName = this.inputName.nativeElement.value;
    const newAmount = this.inputAmount.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount);
    this.ingredientEvent.emit(newIngredient);
  }

}

