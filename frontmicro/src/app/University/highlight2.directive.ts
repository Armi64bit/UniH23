// highlight.directive.ts
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {
  @Input('highlight2Color') highlight2Color: string | undefined;

  constructor(private el: ElementRef, private router: Router) {
    this.el.nativeElement.style.color = 'white';

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlight2Color || 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('click') onClick() {
    // Navigate to the specified URL
    this.router.navigate(['/university/getAll']);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
    // Change the text content based on the highlight state
    this.el.nativeElement.textContent = color ? 'Go back to main page' : 'Total Number of Rooms for Each Bloc in Residence Hall Related to Each University';
  }
}
