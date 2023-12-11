import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityStatisticsComponent } from './university-statistics.component';

describe('UniversityStatisticsComponent', () => {
  let component: UniversityStatisticsComponent;
  let fixture: ComponentFixture<UniversityStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
