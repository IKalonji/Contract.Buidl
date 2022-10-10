import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeExpressionComponent } from './before-expression.component';

describe('BeforeExpressionComponent', () => {
  let component: BeforeExpressionComponent;
  let fixture: ComponentFixture<BeforeExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
