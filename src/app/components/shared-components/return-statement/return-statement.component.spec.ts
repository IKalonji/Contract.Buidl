import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnStatementComponent } from './return-statement.component';

describe('ReturnStatementComponent', () => {
  let component: ReturnStatementComponent;
  let fixture: ComponentFixture<ReturnStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
