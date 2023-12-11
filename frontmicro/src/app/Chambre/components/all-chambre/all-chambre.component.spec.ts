import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChambreComponent } from './all-chambre.component';

describe('AllChambreComponent', () => {
  let component: AllChambreComponent;
  let fixture: ComponentFixture<AllChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
