import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ForStatement } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<ForStatement>();
  @Output() updateItemEvent = new EventEmitter<ForStatement>();
  @Input() item!: ForStatement;

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
