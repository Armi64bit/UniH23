import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPointerHand]'
})
export class PointerHandDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setCursor('pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setCursor('default');
  }

  private setCursor(cursorType: string) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', cursorType);
  }
}
