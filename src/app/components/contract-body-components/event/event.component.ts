import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Event>();
  @Output() updateItemEvent = new EventEmitter<Event>();
  @Output() changeContextEvent = new EventEmitter<Event>();
  @Input() item!: Event;

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
