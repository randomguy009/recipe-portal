import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingList } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingList) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.newIngredientEvent.subscribe(
      () => this.ingredients = this.shoppingListService.getIngredients()
    );
  }

  // addIngredient(ingredient: Ingredient) {
  //   this.shoppingListService.addIngredient(ingredient);
  // }

}
