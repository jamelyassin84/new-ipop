import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathRecordsComponent } from './death-records.component';

describe('DeathRecordsComponent', () => {
  let component: DeathRecordsComponent;
  let fixture: ComponentFixture<DeathRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
