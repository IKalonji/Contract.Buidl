import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterExpressionComponent } from './after-expression.component';

describe('AfterExpressionComponent', () => {
  let component: AfterExpressionComponent;
  let fixture: ComponentFixture<AfterExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
