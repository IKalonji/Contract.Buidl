import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BaseItem, License, Pragma, Comment, Version, ABICoderPragma, Import, 
  Constant, Contract, Interface, Library, Constructor,  } 
  from "../../grammer/source-unit";
import { FileItems, ContractItems, ConstructorItems } from 'src/app/constants/solidity-syntax';
import { DeployService } from 'src/app/services/deploy.service';
//const fs = require('fs');

@Component({
  selector: 'app-create-solidity-file',
  templateUrl: './create-solidity-file.component.html',
  styleUrls: ['./create-solidity-file.component.css']
})
export class CreateSolidityFileComponent implements OnInit {

  constructor(private deploymentService: DeployService) { }

  fileItems = FileItems;
  contractItems = ContractItems;
  constructorItems = ConstructorItems;

  options: any[] = [];
  fileData: BaseItem[] = [];
  contractData: BaseItem[] = [];

  items: BaseItem[] = [];
  defaultItem: BaseItem = new BaseItem("");

  ngOnInit(): void {
    this.options = this.fileItems;
  }

  drop(event: CdkDragDrop<BaseItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      switch(event.previousContainer.data[event.previousIndex].name) {
        case "Import":
          this.items.push(new Import());
          break;
        case "Pragma":
          this.items.push(new Pragma());
          break;
        case "Comment":
          this.items.push(new Comment());
          break;
        case "Constant":
          this.items.push(new Constant());
          break;
        case "Contract":
          this.items.push(new Contract());
          break;
        case "Library":
          this.items.push(new Library());
          break;
        case "Interface":
          this.items.push(new Interface());
          break;
        case "Version":
          if(this.items.findIndex(i => i.name == "Version") < 0) {
            this.items.push(new Version());
          }
          break;
        case "ABICoderPragma":
          if(this.items.findIndex(i => i.name == "ABICoderPragma") < 0) {
            this.items.push(new ABICoderPragma());
          }
          break;
        case "License":
          if(this.items.findIndex(i => i.name == "License") < 0) {
            this.items.push(new License());
          }
          break;
      }
    }
  }

  changeContext(item: BaseItem) {
    switch(item.name) {
      case "Contract":
        this.options = this.contractItems;
        break;
      case "Constructor":
        this.options = this.constructorItems;
        break;
      default: {
        this.options = this.fileItems;
      }
    }
  }

  updateItem(item: BaseItem) {
    let index = this.items.findIndex(i => i.uuid == item.uuid);
    if(index > -1) {
      this.items[index] = item;
    }
  }

  deleteItem(item: any) {
    let index = this.items.findIndex(i => i.uuid == item.uuid);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }

  geItemsIds() {
    let ids = this.items.filter(i => i.name == "Contract").map(c => c.uuid);
    ids.push("selected");
    return ids;
  }

  previewFile() {
    let output = "";
    this.items.forEach(i => output += `\n${i.generateStatement()}`);
    console.log(output);
    this.deploymentService.deployContract(output);
  }

  splitStringByCaps(text: string): string {
    return text.split(/(?=[A-Z][a-z])/).join(" ")
  }
}
