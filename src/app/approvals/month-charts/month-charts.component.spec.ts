import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthChartsComponent } from './month-charts.component';

describe('MonthChartsComponent', () => {
  let component: MonthChartsComponent;
  let fixture: ComponentFixture<MonthChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
