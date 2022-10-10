import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pragma } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-pragma',
  templateUrl: './pragma.component.html',
  styleUrls: ['./pragma.component.css']
})
export class PragmaComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Pragma>();
  @Output() updateItemEvent = new EventEmitter<Pragma>();
  @Input() item!: Pragma;

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
