import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TryStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-try-catch-statement',
  templateUrl: './try-catch-statement.component.html',
  styleUrls: ['./try-catch-statement.component.css']
})
export class TryCatchStatementComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<TryStatement>();
  @Output() updateItemEvent = new EventEmitter<TryStatement>();
  @Input() item!: TryStatement;

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
