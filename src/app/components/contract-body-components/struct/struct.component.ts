import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Struct } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Struct>();
  @Output() updateItemEvent = new EventEmitter<Struct>();
  @Output() changeContextEvent = new EventEmitter<Struct>();
  @Input() item!: Struct;

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
