import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogicalExpression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-logic-expression',
  templateUrl: './logic-expression.component.html',
  styleUrls: ['./logic-expression.component.css']
})
export class LogicExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<LogicalExpression>();
  @Output() updateItemEvent = new EventEmitter<LogicalExpression>();
  @Input() item!: LogicalExpression;

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

}
