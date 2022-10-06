import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReturnStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-return-statement',
  templateUrl: './return-statement.component.html',
  styleUrls: ['./return-statement.component.css']
})
export class ReturnStatementComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<ReturnStatement>();
  @Output() updateItemEvent = new EventEmitter<ReturnStatement>();
  @Input() item!: ReturnStatement;

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
