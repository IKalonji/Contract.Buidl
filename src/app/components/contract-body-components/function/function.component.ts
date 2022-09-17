import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Function } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Function>();
  @Output() updateItemEvent = new EventEmitter<Function>();
  @Output() changeContextEvent = new EventEmitter<Function>();
  @Input() item!: Function;

  constructor() { }

  ngOnInit(): void {
  }

  changeContext(event:any) {
    event.stopPropagation();
    this.changeContextEvent.emit(this.item);;
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

}
