import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlletudiantComponent } from './alletudiant.component';

describe('AlletudiantComponent', () => {
  let component: AlletudiantComponent;
  let fixture: ComponentFixture<AlletudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlletudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlletudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
