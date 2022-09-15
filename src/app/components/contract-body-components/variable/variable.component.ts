import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Variable } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Variable>();
  @Output() updateItemEvent = new EventEmitter<Variable>();
  @Output() changeContextEvent = new EventEmitter<Variable>();
  @Input() item!: Variable;

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
