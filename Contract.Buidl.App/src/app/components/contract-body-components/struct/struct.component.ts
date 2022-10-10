import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Struct, StructMember } from 'src/app/grammer/source-unit';
import { ElementaryTypes } from 'src/app/constants/solidity-syntax';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  @Output() deleteItemEvent = new EventEmitter<Struct>();
  @Output() updateItemEvent = new EventEmitter<Struct>();
  @Input() item!: Struct;

  types: string[] = ElementaryTypes;

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
  }

  updateItem() {
    this.updateItemEvent.emit(this.item);
  }

  addMember() {
    if(this.item.members) {
      this.item.members.push(new StructMember());
    }
    this.updateItem();
  }

  removeMember(member: StructMember) {
    if(this.item.members) {
      let index = this.item.members?.findIndex(i => i.uuid == member.uuid);
      if(index > -1) {
        this.item.members.splice(index, 1);
      }
    }
    this.updateItem();
  }

  updateMember(member: StructMember) {
    if(this.item.members) {
      let index = this.item.members?.findIndex(i => i.uuid == member.uuid);
      if(index > -1) {
        this.item.members[index] = member;
      }
    }
    this.updateItem();
  }

}
