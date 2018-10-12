import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingList {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10)
      ];

    newIngredientEvent = new EventEmitter();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.newIngredientEvent.emit();
      }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.newIngredientEvent.emit();
    }
}