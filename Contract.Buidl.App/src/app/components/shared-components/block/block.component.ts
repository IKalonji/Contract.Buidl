import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statements, Expressions } from 'src/app/constants/solidity-syntax';
import { AfterExpression, AssignmentExpression, BaseItem, BeforeExpression, Block, BreakStatement, CompareExpression, ContinueStatement, DoWhileStatement, Expression, ForStatement, IfStatement, LiteralExpression, LogicalExpression, ReturnStatement, Statement, TryStatement, Variable, WhileStatement } from 'src/app/grammer/source-unit';
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

  expressions: string [] = Expressions;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      switch(event.previousContainer.data[event.previousIndex]) {
        case "Continue":
          this.item?.expressions?.push(new ContinueStatement());
          break;
        case "Break":
          this.item?.expressions?.push(new BreakStatement());
          break;
        case "Try-Catch":
          this.item?.expressions?.push(new TryStatement());
          break;
        case "Return":
          this.item?.expressions?.push(new ReturnStatement());
          break;
        case "Variable":
          this.item?.expressions?.push(new Variable());
          break;
        case "Expression":
          this.item?.expressions?.push(new Expression("Expression"));
          break;
        case "Statement":
          this.item?.expressions?.push(new Statement("Statement"));
          break;
      }
    }
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  deleteBlockItem(expression: BaseItem) {
    let index = this.item?.expressions?.findIndex(e => e.uuid == expression.uuid);
    if(index != undefined && index > -1) {
      this.item?.expressions?.splice(index, 1);
      this.updateItem();
    }
  }

  updateBlockItem(expression: BaseItem) {
    let index = this.item?.expressions?.findIndex(e => e.uuid == expression.uuid);
    if(index != undefined && index > -1 && this.item?.expressions) {
      this.item.expressions[index] = expression;
      this.updateItem();
    }
  }

}
