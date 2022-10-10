import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Version } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Version>();
  @Output() updateItemEvent = new EventEmitter<Version>();
  @Input() item!: Version;

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
