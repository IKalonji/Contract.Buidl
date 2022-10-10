import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseItem, Comment, Constructor, Contract, Enum, Error, Event, Fallback, Function, Modifier, Receive, StateVariable, Struct, UserDefinedValueType, Using, Variable } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Contract>();
  @Output() updateItemEvent = new EventEmitter<Contract>();
  @Output() changeContextEvent = new EventEmitter<Contract>();
  @Input() item!: Contract;

  constructor() { }

  ngOnInit(): void {
  }
  
  drop(event: CdkDragDrop<BaseItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      switch(event.previousContainer.data[event.previousIndex].name) {
        case "StateVariable":
          this.item.elements?.push(new StateVariable());
          break;
        case "Comment":
          this.item.elements?.push(new Comment());
          break;
        case "Constructor":
          if(this.item.elements && this.item.elements?.findIndex(e => e.name == "Constructor") < 0) {
            this.item.elements?.push(new Constructor());
          }
          break;
        case "Struct":
          this.item.elements?.push(new Struct());
          break;
        case "Enum":
          this.item.elements?.push(new Enum());
          break;
        case "Function":
          this.item.elements?.push(new Function());
          break;
        case "Modifier":
          this.item.elements?.push(new Modifier());
          break;
        case "Fallback":
          this.item.elements?.push(new Fallback());
          break;
        case "Receive":
          this.item.elements?.push(new Receive());
          break;
        case "UserDefinedValueType":
          this.item.elements?.push(new UserDefinedValueType());
          break;
        case "Event":
          this.item.elements?.push(new Event());
          break;
        case "Error":
          this.item.elements?.push(new Error());
          break;
        case "Using":
          this.item.elements?.push(new Using());
          break;
      }
    }
  }

  sendContext(event:any) {
    event.stopPropagation();
    this.changeContextEvent.emit(this.item);
  }

  changeContext(item: BaseItem) {
    this.changeContextEvent.emit(item);
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  deleteSubItem(item: BaseItem) {
    if(this.item.elements) {
      let index = this.item.elements.findIndex(i => i.uuid == item.uuid);
      if(index > -1) {
        this.item.elements?.splice(index, 1);
      }
      this.updateItem();
    }
  }

  updateSubItem(item:BaseItem) {
    if(this.item.elements) {
      let index = this.item.elements.findIndex(i => i.uuid == item.uuid);
      if(index > -1) {
        this.item.elements[index] = item;
      }
      this.updateItem();
    }
  }

}

