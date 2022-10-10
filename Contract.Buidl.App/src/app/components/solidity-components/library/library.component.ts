import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Library } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Library>();
  @Output() updateItemEvent = new EventEmitter<Library>();
  @Input() item!: Library;

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
