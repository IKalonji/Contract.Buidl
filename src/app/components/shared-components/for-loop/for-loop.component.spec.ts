import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopComponent } from './for-loop.component';

describe('ForLoopComponent', () => {
  let component: ForLoopComponent;
  let fixture: ComponentFixture<ForLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
