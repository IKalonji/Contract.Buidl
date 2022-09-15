import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { License } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<License>();
  @Output() updateItemEvent = new EventEmitter<License>();
  @Input() item!: License;

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
