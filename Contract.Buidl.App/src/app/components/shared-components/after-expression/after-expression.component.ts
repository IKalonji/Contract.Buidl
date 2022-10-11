import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AfterOperators } from 'src/app/constants/solidity-syntax';
import { AfterExpression, LiteralExpression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-after-expression',
  templateUrl: './after-expression.component.html',
  styleUrls: ['./after-expression.component.css']
})
export class AfterExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<AfterExpression>();
  @Output() updateItemEvent = new EventEmitter<AfterExpression>();
  @Input() item!: AfterExpression;

  operators: any[] = AfterOperators;

  constructor() { }

  ngOnInit(): void {
    if(!this.item.literal) {
      this.item.literal = new LiteralExpression();
    }
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

}
