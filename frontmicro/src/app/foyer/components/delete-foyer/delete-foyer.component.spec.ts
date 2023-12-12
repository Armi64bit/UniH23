import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoyerComponent } from './delete-foyer.component';

describe('DeleteFoyerComponent', () => {
  let component: DeleteFoyerComponent;
  let fixture: ComponentFixture<DeleteFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
