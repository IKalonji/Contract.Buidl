import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseItem, Constructor, Parameter } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Constructor>();
  @Output() updateItemEvent = new EventEmitter<Constructor>();
  @Output() changeContextEvent = new EventEmitter<Constructor>();
  @Input() item!: Constructor;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<BaseItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      switch(event.previousContainer.data[event.previousIndex].name) {
        case "Parameter":
          this.item.parameters?.push(new Parameter());
          break;
      }
    }
  }

  sendContext(event:any) {
    event.stopPropagation();
    this.changeContextEvent.emit(this.item);;
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  addParameter() {
    this.item.parameters?.push(new Parameter());
  }

  deleteParameter(param: Parameter) {
    if(this.item.parameters) {
      let index = this.item.parameters?.findIndex(p => p.uuid == param.uuid);
      if(index > -1) {
        this.item.parameters?.splice(index, 1);
      }
    }
  }

  updateParameter(param: Parameter) {
    let index = this.item.parameters?.findIndex(p => p.uuid == param.uuid);

    if(this.item.parameters) {
      if(index && index > -1) {
        this.item.parameters[index] = param;
      }
    }
    this.updateItem();
  }

}
