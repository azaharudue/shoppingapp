import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService]
})
export class AppComponent {
   tab = 'recipe';
   hidden = false;
  onNavigate(otherTab: string): void {
    if (this.tab === 'recipe'){ this.tab = otherTab; }
    else {this.tab = otherTab; }
  }
}
