import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlocsComponent } from './all-blocs.component';

describe('AllBlocsComponent', () => {
  let component: AllBlocsComponent;
  let fixture: ComponentFixture<AllBlocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBlocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBlocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
