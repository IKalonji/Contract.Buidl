import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LiteralExpression, ReturnStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-return-statement',
  templateUrl: './return-statement.component.html',
  styleUrls: ['./return-statement.component.css']
})
export class ReturnStatementComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<ReturnStatement>();
  @Output() updateItemEvent = new EventEmitter<ReturnStatement>();
  @Input() item!: ReturnStatement;

  value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addReturn() {
    if(this.value) {
      let literal = new LiteralExpression();
      literal.value = this.value;
      let index = this.item.expressions?.findIndex(e => e.value == this.value);
      
      if(index && index < 0) {
        this.item.expressions?.push(literal);
        this.value = "";
      }
    }
    this.updateItem();
  }

  deleteReturn(value?: string) {
    let index = this.item?.expressions?.findIndex(e => e.value == value) ?? -1;
    
    if(index > -1) {
      this.item.expressions?.splice(index, 1);
    }
    this.updateItem();
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

}
