import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Struct, StructMember } from 'src/app/grammer/source-unit';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Struct>();
  @Output() updateItemEvent = new EventEmitter<Struct>();
  @Input() item!: Struct;

  newMember: StructMember = new StructMember();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  addEnum() {
    if(this.newMember) {
      if(!this.item.members?.find(i => i.identifier?.toLocaleLowerCase() == this.newMember.identifier?.toLocaleLowerCase())) {
        let member = new StructMember();
        member.type = this.newMember.type;
        member.identifier = this.newMember.identifier;
        this.item.members?.push(member);
        this.newMember = new StructMember();
      }
    }
    this.updateItem();
  }

  removeEnum(member: StructMember) {
    if(this.item.members) {
      let index = this.item.members?.findIndex(i => i.uuid == member.uuid);
      if(index > -1) {
        this.item.members.splice(index, 1);
      }
    }
    this.updateItem();
  }

}
