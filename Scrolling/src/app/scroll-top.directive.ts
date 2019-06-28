import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ScrollTop]'
})
export class ScrollTopDirective {
  scrollToTop = 200;

  constructor(private host: ElementRef, private renderer: Renderer2) {
    console.log('scroll-top');
   }
@HostListener('window:scroll') toggle() {
  // this.host.nativeElement.style.display = window.pageYOffset > this.scrollToTop ? 'block' : 'none';
  this.renderer.setStyle(this.host.nativeElement, 'display', window.pageYOffset > this.scrollToTop ? 'block' : 'none');
}
@HostListener('click') scrollTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
}
