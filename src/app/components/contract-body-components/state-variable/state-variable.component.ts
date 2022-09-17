import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateVariable } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-state-variable',
  templateUrl: './state-variable.component.html',
  styleUrls: ['./state-variable.component.css']
})
export class StateVariableComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<StateVariable>();
  @Output() updateItemEvent = new EventEmitter<StateVariable>();
  @Output() changeContextEvent = new EventEmitter<StateVariable>();
  @Input() item!: StateVariable;

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
