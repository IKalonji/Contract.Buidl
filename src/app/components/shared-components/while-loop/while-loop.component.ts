import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WhileStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-while-loop',
  templateUrl: './while-loop.component.html',
  styleUrls: ['./while-loop.component.css']
})
export class WhileLoopComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<WhileStatement>();
  @Output() updateItemEvent = new EventEmitter<WhileStatement>();
  @Input() item!: WhileStatement;

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
