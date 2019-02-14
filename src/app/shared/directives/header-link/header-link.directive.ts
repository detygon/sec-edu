import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeaderLink]'
})
export class HeaderLinkDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
