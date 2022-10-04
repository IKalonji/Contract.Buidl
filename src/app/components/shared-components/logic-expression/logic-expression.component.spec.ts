import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicExpressionComponent } from './logic-expression.component';

describe('LogicExpressionComponent', () => {
  let component: LogicExpressionComponent;
  let fixture: ComponentFixture<LogicExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
