import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileLoopComponent } from './while-loop.component';

describe('WhileLoopComponent', () => {
  let component: WhileLoopComponent;
  let fixture: ComponentFixture<WhileLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhileLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhileLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
