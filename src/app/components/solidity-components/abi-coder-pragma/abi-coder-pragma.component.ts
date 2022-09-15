import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ABICoderPragma } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-abi-coder-pragma',
  templateUrl: './abi-coder-pragma.component.html',
  styleUrls: ['./abi-coder-pragma.component.css']
})
export class AbiCoderPragmaComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<ABICoderPragma>();
  @Output() updateItemEvent = new EventEmitter<ABICoderPragma>();
  @Input() item!: ABICoderPragma;

  version1: string = "true";

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  selectionChanged() {
    if(this.version1 == "true") {
      this.item.version1 = true;
    } else {
      this.item.version1 = false;
    }
    this.updateItem();
  }

}
