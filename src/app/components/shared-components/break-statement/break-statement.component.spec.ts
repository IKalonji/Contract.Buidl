import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakStatementComponent } from './break-statement.component';

describe('BreakStatementComponent', () => {
  let component: BreakStatementComponent;
  let fixture: ComponentFixture<BreakStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
