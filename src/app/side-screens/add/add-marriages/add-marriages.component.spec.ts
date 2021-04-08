import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarriagesComponent } from './add-marriages.component';

describe('AddMarriagesComponent', () => {
  let component: AddMarriagesComponent;
  let fixture: ComponentFixture<AddMarriagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarriagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarriagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
