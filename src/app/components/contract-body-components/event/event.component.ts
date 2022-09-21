import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event, EventParameter } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Event>();
  @Output() updateItemEvent = new EventEmitter<Event>();
  @Input() item!: Event;

  newParam: EventParameter = new EventParameter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  addEventParam() {
    if(this.newParam.type) {
      let param = new EventParameter();
      param.type = this.newParam.type;
      param.indexed = this.newParam.indexed;
      param.identifier = this.newParam.identifier;
      this.item.parameters?.push(param);
      this.newParam = new EventParameter();
    }
  }

  deleteEventParam(param: EventParameter) {
    if(this.item.parameters) {
      let index = this.item.parameters?.findIndex(p => p.uuid == param.uuid);
      if(index > -1) {
        this.item.parameters.splice(index, 1);
      }
    }
  }

}
