import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Enum } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css']
})
export class EnumComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Enum>();
  @Output() updateItemEvent = new EventEmitter<Enum>();
  @Output() changeContextEvent = new EventEmitter<Enum>();
  @Input() item!: Enum;

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
