import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is just a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/800px-Banjo_Shark_recipe.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Chicken Wings', 4)
        ]),
        new Recipe('A Fucking Test Recipe', 'This is just a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/800px-Banjo_Shark_recipe.jpg',
        [
            new Ingredient('Fries', 20),
            new Ingredient('Chillies', 10)
        ])
    ];

    SelectedItem = new EventEmitter<Recipe>();
    
    getRecipes() {
        return this.recipes.slice();
    }
}