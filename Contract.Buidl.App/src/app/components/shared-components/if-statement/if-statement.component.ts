import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IfStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-if-statement',
  templateUrl: './if-statement.component.html',
  styleUrls: ['./if-statement.component.css']
})
export class IfStatementComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<IfStatement>();
  @Output() updateItemEvent = new EventEmitter<IfStatement>();
  @Input() item!: IfStatement;

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
