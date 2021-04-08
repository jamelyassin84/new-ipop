import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCpdbComponent } from './add-cpdb.component';

describe('AddCpdbComponent', () => {
  let component: AddCpdbComponent;
  let fixture: ComponentFixture<AddCpdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCpdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCpdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
