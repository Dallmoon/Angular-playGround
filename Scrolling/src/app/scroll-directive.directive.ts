import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollDirective]'
})
export class ScrollDirectiveDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {
    
   }
@HostListener('window:scroll') handler1() {
  if (window.pageYOffset > 100) {
  this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  } else {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }
}

@HostListener('click') handler2() {
  // console.log(this.el);
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


}
