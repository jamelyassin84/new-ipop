import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInMigrationsComponent } from './add-in-migrations.component';

describe('AddInMigrationsComponent', () => {
  let component: AddInMigrationsComponent;
  let fixture: ComponentFixture<AddInMigrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInMigrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInMigrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
