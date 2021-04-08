import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackUpAndRestoreComponent } from './back-up-and-restore.component';

describe('BackUpAndRestoreComponent', () => {
  let component: BackUpAndRestoreComponent;
  let fixture: ComponentFixture<BackUpAndRestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackUpAndRestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackUpAndRestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
