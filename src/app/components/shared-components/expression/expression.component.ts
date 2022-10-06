import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Expression>();
  @Output() updateItemEvent = new EventEmitter<Expression>();
  @Input() item!: Expression;

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
