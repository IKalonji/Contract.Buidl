import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteralExpressionComponent } from './literal-expression.component';

describe('LiteralExpressionComponent', () => {
  let component: LiteralExpressionComponent;
  let fixture: ComponentFixture<LiteralExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteralExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteralExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
