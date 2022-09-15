import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Using } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-using',
  templateUrl: './using.component.html',
  styleUrls: ['./using.component.css']
})
export class UsingComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Using>();
  @Output() updateItemEvent = new EventEmitter<Using>();
  @Output() changeContextEvent = new EventEmitter<Using>();
  @Input() item!: Using;

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
