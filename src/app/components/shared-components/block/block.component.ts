import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statements, Expressions } from 'src/app/constants/solidity-syntax';
import { BaseItem, Block, Expression } from 'src/app/grammer/source-unit';
import { CdkDragDrop, copyArrayItem, DragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Block>();
  @Output() updateItemEvent = new EventEmitter<Block>();
  @Input() item?: Block;

  statements: BaseItem [] = Statements.map(s => new BaseItem(s));
  expressions: Expression[] = Expressions.map(s => new BaseItem(s));

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<BaseItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
