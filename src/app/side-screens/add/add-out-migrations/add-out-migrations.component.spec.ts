import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutMigrationsComponent } from './add-out-migrations.component';

describe('AddOutMigrationsComponent', () => {
  let component: AddOutMigrationsComponent;
  let fixture: ComponentFixture<AddOutMigrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutMigrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOutMigrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
