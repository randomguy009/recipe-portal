import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  recipeFlag: boolean = true;
  shoppingListFlag: boolean = false;

  checkLink(linkInfo: {linkClicked: string}) {
    if(linkInfo.linkClicked === 'recipes') {
      this.recipeFlag = true;
      this.shoppingListFlag = false;
    }
    if(linkInfo.linkClicked === 'shoppingList') {
      this.shoppingListFlag = true;
      this.recipeFlag = false;
    }
  }
}
