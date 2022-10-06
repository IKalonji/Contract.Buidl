import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContinueStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-continue-statement',
  templateUrl: './continue-statement.component.html',
  styleUrls: ['./continue-statement.component.css']
})
export class ContinueStatementComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<ContinueStatement>();
  @Output() updateItemEvent = new EventEmitter<ContinueStatement>();
  @Input() item!: ContinueStatement;

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
