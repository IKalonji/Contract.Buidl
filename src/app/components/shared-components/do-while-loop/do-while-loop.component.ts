import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DoWhileStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-do-while-loop',
  templateUrl: './do-while-loop.component.html',
  styleUrls: ['./do-while-loop.component.css']
})
export class DoWhileLoopComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<DoWhileStatement>();
  @Output() updateItemEvent = new EventEmitter<DoWhileStatement>();
  @Input() item!: DoWhileStatement;

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
