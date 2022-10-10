import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseItem, Fallback, Parameter } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-fallback',
  templateUrl: './fallback.component.html',
  styleUrls: ['./fallback.component.css']
})
export class FallbackComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Fallback>();
  @Output() updateItemEvent = new EventEmitter<Fallback>();
  @Output() changeContextEvent = new EventEmitter<Fallback>();
  @Input() item!: Fallback;

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
    this.updateItem();
  }

  addReturn() {
    this.item.returns?.push(new Parameter());
    this.updateItem();
  }

  deleteParameter(param: Parameter) {
    if(this.item.parameters) {
      let index = this.item.parameters?.findIndex(p => p.uuid == param.uuid);
      if(index > -1) {
        this.item.parameters?.splice(index, 1);
      }
    }
    this.updateItem();
  }

  deleteReturn(param: Parameter) {
    if(this.item.returns) {
      let index = this.item.returns?.findIndex(p => p.uuid == param.uuid);
      if(index > -1) {
        this.item.returns?.splice(index, 1);
      }
    }
    this.updateItem();
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

  updateReturn(param: Parameter) {
    let index = this.item.returns?.findIndex(p => p.uuid == param.uuid);

    if(this.item.returns) {
      if(index && index > -1) {
        this.item.returns[index] = param;
      }
    }
    this.updateItem();
  }

}
