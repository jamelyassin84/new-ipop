import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBirthsComponent } from './add-births.component';

describe('AddBirthsComponent', () => {
  let component: AddBirthsComponent;
  let fixture: ComponentFixture<AddBirthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBirthsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBirthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
