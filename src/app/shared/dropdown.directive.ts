import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') checkOpen: boolean = false; 

  constructor() { }

  @HostListener('click') onclick(event: Event) {
    this.checkOpen = !this.checkOpen;
  }

}
