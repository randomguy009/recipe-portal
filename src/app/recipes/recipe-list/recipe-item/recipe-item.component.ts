import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {
    @Input('recipeItem') recipe : Recipe;

    @Output() SelectedItem = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService) {}

    displayItem(recipeItem: Recipe) {
       
     this.recipeService.SelectedItem.emit(recipeItem);
     //this.SelectedItem.emit(recipeItem);
    
    }
}

