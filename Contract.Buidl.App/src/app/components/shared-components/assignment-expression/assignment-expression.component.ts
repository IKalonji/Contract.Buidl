import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentExpression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-assignment-expression',
  templateUrl: './assignment-expression.component.html',
  styleUrls: ['./assignment-expression.component.css']
})
export class AssignmentExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<AssignmentExpression>();
  @Output() updateItemEvent = new EventEmitter<AssignmentExpression>();
  @Input() item!: AssignmentExpression;

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
