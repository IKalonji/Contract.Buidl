import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LiteralExpression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-literal-expression',
  templateUrl: './literal-expression.component.html',
  styleUrls: ['./literal-expression.component.css']
})
export class LiteralExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<LiteralExpression>();
  @Output() updateItemEvent = new EventEmitter<LiteralExpression>();
  @Input() item!: LiteralExpression;

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
