import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniTableDetailsComponent } from './uni-table-details.component';

describe('UniTableDetailsComponent', () => {
  let component: UniTableDetailsComponent;
  let fixture: ComponentFixture<UniTableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniTableDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
