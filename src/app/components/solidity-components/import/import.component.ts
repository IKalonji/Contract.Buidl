import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Import } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Import>();
  @Output() updateItemEvent = new EventEmitter<Import>();
  @Input() item!: Import;

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
