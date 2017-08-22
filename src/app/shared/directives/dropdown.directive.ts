import { Directive, OnInit, Renderer2, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('click') toggleMenu(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
