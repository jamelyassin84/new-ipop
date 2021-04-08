import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutMigrationRecordsComponent } from './out-migration-records.component';

describe('OutMigrationRecordsComponent', () => {
  let component: OutMigrationRecordsComponent;
  let fixture: ComponentFixture<OutMigrationRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutMigrationRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutMigrationRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
