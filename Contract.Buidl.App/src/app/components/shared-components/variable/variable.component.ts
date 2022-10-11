import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LiteralExpression, Variable } from 'src/app/grammer/source-unit';
import { ElementaryTypes, DataLocation } from 'src/app/constants/solidity-syntax';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Variable>();
  @Output() updateItemEvent = new EventEmitter<Variable>();
  @Input() item!: Variable;

  literal: string = "";
  types: any[] = ElementaryTypes;
  locations: any[] = DataLocation;

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
