import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BeforeExpression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-before-expression',
  templateUrl: './before-expression.component.html',
  styleUrls: ['./before-expression.component.css']
})
export class BeforeExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<BeforeExpression>();
  @Output() updateItemEvent = new EventEmitter<BeforeExpression>();
  @Input() item!: BeforeExpression;

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
