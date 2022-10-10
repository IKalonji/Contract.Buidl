import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSolidityFileComponent } from './create-solidity-file.component';

describe('CreateSolidityFileComponent', () => {
  let component: CreateSolidityFileComponent;
  let fixture: ComponentFixture<CreateSolidityFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSolidityFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSolidityFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
