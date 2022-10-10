import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AfterExpression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-after-expression',
  templateUrl: './after-expression.component.html',
  styleUrls: ['./after-expression.component.css']
})
export class AfterExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<AfterExpression>();
  @Output() updateItemEvent = new EventEmitter<AfterExpression>();
  @Input() item!: AfterExpression;

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
