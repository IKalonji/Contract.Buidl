import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constant } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrls: ['./constant.component.css']
})
export class ConstantComponent implements OnInit {
  
  @Output() deleteItemEvent = new EventEmitter<Constant>();
  @Output() updateItemEvent = new EventEmitter<Constant>();
  @Input() item!: Constant;

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
