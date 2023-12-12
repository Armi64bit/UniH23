import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationbackComponent } from './reservationback.component';

describe('ReservationbackComponent', () => {
  let component: ReservationbackComponent;
  let fixture: ComponentFixture<ReservationbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
