import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinedValueTypeComponent } from './user-defined-value-type.component';

describe('UserDefinedValueTypeComponent', () => {
  let component: UserDefinedValueTypeComponent;
  let fixture: ComponentFixture<UserDefinedValueTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDefinedValueTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefinedValueTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
