import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Error, ErrorParameter } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Error>();
  @Output() updateItemEvent = new EventEmitter<Error>();
  @Output() changeContextEvent = new EventEmitter<Error>();
  @Input() item!: Error;

  newParam: ErrorParameter = new ErrorParameter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  addErrorParam() {
    if(this.newParam.type) {
      let param = new ErrorParameter();
      param.type = this.newParam.type;
      param.identifier = this.newParam.identifier;
      this.item.parameters?.push(param);
      this.newParam = new ErrorParameter();
    }
  }

  deleteErrorParam(param: ErrorParameter) {
    if(this.item.parameters) {
      let index = this.item.parameters?.findIndex(p => p.uuid == param.uuid);
      if(index > -1) {
        this.item.parameters.splice(index, 1);
      }
    }
  }

}
