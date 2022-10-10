import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfStatementComponent } from './if-statement.component';

describe('IfStatementComponent', () => {
  let component: IfStatementComponent;
  let fixture: ComponentFixture<IfStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
