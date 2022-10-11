import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BeforeExpression, LiteralExpression } from 'src/app/grammer/source-unit';
import { BeforeOperators } from 'src/app/constants/solidity-syntax';

@Component({
  selector: 'app-before-expression',
  templateUrl: './before-expression.component.html',
  styleUrls: ['./before-expression.component.css']
})
export class BeforeExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<BeforeExpression>();
  @Output() updateItemEvent = new EventEmitter<BeforeExpression>();
  @Input() item!: BeforeExpression;

  operators: any[] = BeforeOperators;

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
