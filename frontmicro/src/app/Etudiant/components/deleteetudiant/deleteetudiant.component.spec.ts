import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteetudiantComponent } from './deleteetudiant.component';

describe('DeleteetudiantComponent', () => {
  let component: DeleteetudiantComponent;
  let fixture: ComponentFixture<DeleteetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
