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
  @Input() item!: Enum;

  newValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  addEnum() {
    if(this.item.values) {
      this.item.values.push(this.newValue);
    }
    this.updateItem();
    this.newValue = "";
  }

  removeEnum(value: string) {
    if(this.item.values) {
      let index = this.item.values?.findIndex(i => i == value);
      if(index > -1) {
        this.item.values.splice(index, 1);
      }
    }
    this.updateItem();
  }

  updateEnum(value: string) {
    if(this.item.values) {
      let index = this.item.values?.findIndex(i => i == value);
      if(index > -1) {
        this.item.values[index] = value;
      }
    }
    this.updateItem();
  }

}
