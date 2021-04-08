import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationProfileComponent } from './population-profile.component';

describe('PopulationProfileComponent', () => {
  let component: PopulationProfileComponent;
  let fixture: ComponentFixture<PopulationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
