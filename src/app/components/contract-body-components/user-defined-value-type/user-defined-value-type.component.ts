import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDefinedValueType } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-user-defined-value-type',
  templateUrl: './user-defined-value-type.component.html',
  styleUrls: ['./user-defined-value-type.component.css']
})
export class UserDefinedValueTypeComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<UserDefinedValueType>();
  @Output() updateItemEvent = new EventEmitter<UserDefinedValueType>();
  @Output() changeContextEvent = new EventEmitter<UserDefinedValueType>();
  @Input() item!: UserDefinedValueType;

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
