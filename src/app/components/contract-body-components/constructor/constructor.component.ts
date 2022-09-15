import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constructor } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Constructor>();
  @Output() updateItemEvent = new EventEmitter<Constructor>();
  @Output() changeContextEvent = new EventEmitter<Constructor>();
  @Input() item!: Constructor;

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
