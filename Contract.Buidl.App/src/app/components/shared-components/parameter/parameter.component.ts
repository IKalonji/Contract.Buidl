import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Parameter } from 'src/app/grammer/source-unit';
import { DataLocation } from 'src/app/constants/solidity-syntax';
import { ElementaryTypes } from 'src/app/constants/solidity-syntax';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Parameter>();
  @Output() updateItemEvent = new EventEmitter<Parameter>();
  @Input() item!: Parameter;

  dataLocation: string[] = DataLocation;
  types: string[] = ElementaryTypes;

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
