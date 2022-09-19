import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Parameter } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Parameter>();
  @Output() updateItemEvent = new EventEmitter<Parameter>();
  @Input() item!: Parameter;

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