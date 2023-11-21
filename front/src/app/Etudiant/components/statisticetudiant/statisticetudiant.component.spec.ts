import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticetudiantComponent } from './statisticetudiant.component';

describe('StatisticetudiantComponent', () => {
  let component: StatisticetudiantComponent;
  let fixture: ComponentFixture<StatisticetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
