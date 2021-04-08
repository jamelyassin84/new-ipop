import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMigrationRecordsComponent } from './in-migration-records.component';

describe('InMigrationRecordsComponent', () => {
  let component: InMigrationRecordsComponent;
  let fixture: ComponentFixture<InMigrationRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMigrationRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InMigrationRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
