import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receive } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Receive>();
  @Output() updateItemEvent = new EventEmitter<Receive>();
  @Output() changeContextEvent = new EventEmitter<Receive>();
  @Input() item!: Receive;

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
