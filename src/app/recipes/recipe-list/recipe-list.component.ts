import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [new Recipe ('A test Recipe', 'Test description', 'https://www.mtpr.org/sites/kufm/files/styles/x_large/public/201703/Stuffed-Cabbage_Steven-Depolo_CC-BY-20.jpg')
, new Recipe ('Beef curry', 'Beef curry  description ', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Beef_Curry_in_Bangladesh.jpg')
];
  constructor(private recipeService:RecipeService) {
  }
  ngOnInit(): void{
  this.recipes = this.recipeService.getRecipe();
  }

}

