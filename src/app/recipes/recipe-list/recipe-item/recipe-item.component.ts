import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {
    @Input('recipeItem') recipe : Recipe;

    @Output() SelectedItem = new EventEmitter<Recipe>();

    displayItem(recipeItem: Recipe) {
        
     this.SelectedItem.emit(recipeItem);
    
    }
}

