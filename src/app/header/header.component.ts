import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() LinkIdentifier =  new EventEmitter<{linkClicked: string}>();

  constructor() { }

  ngOnInit() {
  }

  recipes() {
    this.LinkIdentifier.emit({
      linkClicked: 'recipes'
    });
  }

  shoppingList() {
    this.LinkIdentifier.emit({
      linkClicked: 'shoppingList'
    });
  }

}
