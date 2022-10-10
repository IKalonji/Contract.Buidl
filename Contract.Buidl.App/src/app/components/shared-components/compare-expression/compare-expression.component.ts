import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompareExpression } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-compare-expression',
  templateUrl: './compare-expression.component.html',
  styleUrls: ['./compare-expression.component.css']
})
export class CompareExpressionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<CompareExpression>();
  @Output() updateItemEvent = new EventEmitter<CompareExpression>();
  @Input() item!: CompareExpression;

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
