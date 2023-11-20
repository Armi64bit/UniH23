import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChambreComponent } from './delete-chambre.component';

describe('DeleteChambreComponent', () => {
  let component: DeleteChambreComponent;
  let fixture: ComponentFixture<DeleteChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
