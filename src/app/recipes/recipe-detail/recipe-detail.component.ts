import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingList } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  //i: number;

  constructor(private shoppingListService: ShoppingList) { }

  ngOnInit() {
  }

  goToShoppingList() {
    // for(this.i=0; this.i < this.recipe.ingredients.length;this.i++) {
    // this.shoppingListService.addIngredient(this.recipe.ingredients[this.i]);
    // }

    this.shoppingListService.addIngredients(this.recipe.ingredients);

  }
}
