import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryCatchStatementComponent } from './try-catch-statement.component';

describe('TryCatchStatementComponent', () => {
  let component: TryCatchStatementComponent;
  let fixture: ComponentFixture<TryCatchStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryCatchStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryCatchStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
