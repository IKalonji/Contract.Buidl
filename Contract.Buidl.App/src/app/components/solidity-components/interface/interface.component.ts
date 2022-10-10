import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Interface } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Interface>();
  @Output() updateItemEvent = new EventEmitter<Interface>();
  @Input() item!: Interface;

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
