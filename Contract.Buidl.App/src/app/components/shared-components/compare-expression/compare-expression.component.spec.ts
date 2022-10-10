import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareExpressionComponent } from './compare-expression.component';

describe('CompareExpressionComponent', () => {
  let component: CompareExpressionComponent;
  let fixture: ComponentFixture<CompareExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
