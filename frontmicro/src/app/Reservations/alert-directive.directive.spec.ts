import { AlertDirectiveDirective } from './alert-directive.directive';
import { TestBed } from '@angular/core/testing';


describe('AlertDirectiveDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      declarations: [AlertDirectiveDirective]
    });

    const fixture = TestBed.createComponent(AlertDirectiveDirective);
    const directive = fixture.componentInstance;
    
    expect(directive).toBeTruthy();
  });
});