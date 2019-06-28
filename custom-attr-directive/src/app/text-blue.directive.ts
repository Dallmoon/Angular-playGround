import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextBlue]'
})
export class TextBlueDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {
    console.log('TextBlueDirective');
    console.log(el);
    // this.el.nativeElement.style.color = 'blue';
    console.log(this.renderer);

   }

@HostListener('mouseenter') handeler1() {
  this.setColor('blue');
}

@HostListener('mouseleave') handeler2() {
  this.setColor('null');
}

setColor(color: string | null) {
  this.renderer.setStyle(this.el.nativeElement, 'color', color);
}

@HostListener('window:scroll') handler3() {
  console.log(window.pageYOffset);
}

}
