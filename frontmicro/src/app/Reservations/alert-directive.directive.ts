import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlertDirective]'
})
export class AlertDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input('alert') text: string | undefined;
  @Input() go: Function = () => {};

  @HostListener('mouseenter') onMouseEnter() {
    // Changement de couleur lorsque la souris survole le bouton
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Rétablir la couleur d'origine lorsque la souris quitte le bouton
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    setTimeout(() => {
      const confirmation = window.confirm(this.text);
      if (confirmation) {
        this.go();
      }
    }, 3000);
  }

  @HostListener('click', ['$event'])
  run(event: Event) {
    // Alert contextuelle
    const confirmation = window.confirm(this.text);
    
    if (confirmation) {
      // L'utilisateur a cliqué sur "OK", effectuer l'action
      this.go();
    } else {
      // L'utilisateur a cliqué sur "Annuler", ne rien faire
    }
  }
  

}
