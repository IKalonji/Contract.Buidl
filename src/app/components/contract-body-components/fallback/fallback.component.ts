import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fallback } from 'src/app/grammer/source-unit';

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

  changeContext(event:any) {
    event.stopPropagation();
    this.changeContextEvent.emit(this.item);;
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

}
