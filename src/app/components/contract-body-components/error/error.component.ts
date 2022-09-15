import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Error } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Error>();
  @Output() updateItemEvent = new EventEmitter<Error>();
  @Output() changeContextEvent = new EventEmitter<Error>();
  @Input() item!: Error;

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

}
