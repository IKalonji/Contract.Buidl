import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentExpressionComponent } from './assignment-expression.component';

describe('AssignmentExpressionComponent', () => {
  let component: AssignmentExpressionComponent;
  let fixture: ComponentFixture<AssignmentExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
