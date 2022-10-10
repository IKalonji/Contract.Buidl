import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoWhileLoopComponent } from './do-while-loop.component';

describe('DoWhileLoopComponent', () => {
  let component: DoWhileLoopComponent;
  let fixture: ComponentFixture<DoWhileLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoWhileLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoWhileLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
