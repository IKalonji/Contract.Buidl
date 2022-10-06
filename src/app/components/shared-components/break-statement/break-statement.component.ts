import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-break-statement',
  templateUrl: './break-statement.component.html',
  styleUrls: ['./break-statement.component.css']
})
export class BreakStatementComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<BreakStatement>();
  @Output() updateItemEvent = new EventEmitter<BreakStatement>();
  @Input() item!: BreakStatement;

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
