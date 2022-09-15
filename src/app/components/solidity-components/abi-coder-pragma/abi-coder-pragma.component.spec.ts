import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiCoderPragmaComponent } from './abi-coder-pragma.component';

describe('AbiCoderPragmaComponent', () => {
  let component: AbiCoderPragmaComponent;
  let fixture: ComponentFixture<AbiCoderPragmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbiCoderPragmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiCoderPragmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
