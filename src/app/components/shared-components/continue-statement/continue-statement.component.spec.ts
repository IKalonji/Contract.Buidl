import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueStatementComponent } from './continue-statement.component';

describe('ContinueStatementComponent', () => {
  let component: ContinueStatementComponent;
  let fixture: ComponentFixture<ContinueStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
