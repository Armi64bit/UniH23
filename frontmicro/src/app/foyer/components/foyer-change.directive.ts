import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFoyerChange]'
})
export class FoyerChangeDirective {
  @Input('appFoyerChange') customStyle: any;


  constructor(private el: ElementRef, private renderer: Renderer2) { 
    //this.el.nativeElement.style.backgroundColor='red';
    //this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
  ngOnChanges() {
    if (this.customStyle) {
      // Apply custom styles
      for (const key of Object.keys(this.customStyle)) {
        this.renderer.setStyle(this.el.nativeElement, key, this.customStyle[key]);
      }
    }
    // Center the position
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
  }
  }


