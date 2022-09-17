import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateVariableComponent } from './state-variable.component';

describe('StateVariableComponent', () => {
  let component: StateVariableComponent;
  let fixture: ComponentFixture<StateVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
