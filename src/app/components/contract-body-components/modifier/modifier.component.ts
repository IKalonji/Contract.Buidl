import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modifier } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Modifier>();
  @Output() updateItemEvent = new EventEmitter<Modifier>();
  @Output() changeContextEvent = new EventEmitter<Modifier>();
  @Input() item!: Modifier;

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
