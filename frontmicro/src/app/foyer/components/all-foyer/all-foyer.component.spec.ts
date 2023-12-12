import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFoyerComponent } from './all-foyer.component';

describe('AllFoyerComponent', () => {
  let component: AllFoyerComponent;
  let fixture: ComponentFixture<AllFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
