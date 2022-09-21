import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Using } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-using',
  templateUrl: './using.component.html',
  styleUrls: ['./using.component.css']
})
export class UsingComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Using>();
  @Output() updateItemEvent = new EventEmitter<Using>();
  @Output() changeContextEvent = new EventEmitter<Using>();
  @Input() item!: Using;

  identifierPath: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  addIdentifier() {
    if(this.item.identifiers) {
      let index = this.item.identifiers.findIndex(i => i.toLocaleLowerCase() == this.identifierPath.toLocaleLowerCase());
      if(index < 0) {
        this.item.identifiers.push(this.identifierPath);
        this.identifierPath = "";
        this.updateItem();
      }
    }
  }

  deleteIdentifier(identifier: string) {
    if(this.item.identifiers) {
      let index = this.item.identifiers?.findIndex(i => i.toLocaleLowerCase() == identifier.toLocaleLowerCase());
      if(index > -1) {
        this.item.identifiers.splice(index, 1);
      }
      this.updateItem();
    }
  }

}
