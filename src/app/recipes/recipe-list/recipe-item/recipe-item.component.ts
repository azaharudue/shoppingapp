import { Component, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() recipe: Recipe;
constructor(private recipeService:RecipeService) { }

onClickDetails(): void{
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

