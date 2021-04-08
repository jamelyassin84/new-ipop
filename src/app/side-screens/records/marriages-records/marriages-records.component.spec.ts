import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagesRecordsComponent } from './marriages-records.component';

describe('MarriagesRecordsComponent', () => {
  let component: MarriagesRecordsComponent;
  let fixture: ComponentFixture<MarriagesRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriagesRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriagesRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
