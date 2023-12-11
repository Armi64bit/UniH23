import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToetudiantComponent } from './assign-toetudiant.component';

describe('AssignToetudiantComponent', () => {
  let component: AssignToetudiantComponent;
  let fixture: ComponentFixture<AssignToetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignToetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignToetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
