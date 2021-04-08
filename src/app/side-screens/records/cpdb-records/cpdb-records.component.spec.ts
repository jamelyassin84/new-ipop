import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpdbRecordsComponent } from './cpdb-records.component';

describe('CpdbRecordsComponent', () => {
  let component: CpdbRecordsComponent;
  let fixture: ComponentFixture<CpdbRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpdbRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpdbRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
