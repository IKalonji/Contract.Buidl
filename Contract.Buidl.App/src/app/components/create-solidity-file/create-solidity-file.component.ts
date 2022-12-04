import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BaseItem, License, Pragma, Comment, Version, ABICoderPragma, Import, 
  Constant, Contract, Interface, Library, Constructor,  } 
  from "../../grammer/source-unit";
import { FileItems, ContractItems, ConstructorItems } from 'src/app/constants/solidity-syntax';
import { DeployService } from 'src/app/services/deploy.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-create-solidity-file',
  templateUrl: './create-solidity-file.component.html',
  styleUrls: ['./create-solidity-file.component.css']
})
export class CreateSolidityFileComponent implements OnInit {

  constructor(private deploymentService: DeployService, private confirmationService: ConfirmationService) { }

  fileItems = FileItems;
  contractItems = ContractItems;
  constructorItems = ConstructorItems;

  options: any[] = [];
  fileData: BaseItem[] = [];
  contractData: BaseItem[] = [];

  items: BaseItem[] = [];
  defaultItem: BaseItem = new BaseItem("");

  output:any

  displaySpinner: boolean = false;
  spinnerMsg: string = "Loading";

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
    this.output = "";
    this.items.forEach(i => this.output += `\n${i.generateStatement()}`);
    // this.items = [];
    console.log(this.output);
    this.confirmationService.confirm({
      header: "Preview",
      message: this.output,
      accept: () => {},
      acceptLabel: "OK",
      rejectVisible: false
    })
  }

  splitStringByCaps(text: string): string {
    return text.split(/(?=[A-Z][a-z])/).join(" ")
  }

  deploy(){
    this.displaySpinner = true;
    this.spinnerMsg = "Parsing contract data";
    const generateContractName:boolean = this.deploymentService.searchContractName(this.items);
    if (generateContractName){
      this.spinnerMsg = "Compiling contract";
      this.deploymentService.compileContract(this.output).subscribe(data => {
        let response: any = data;
        this.spinnerMsg = "Compiled";
        if ("errors" in response){
          alert(JSON.stringify(response["errors"]))
          this.displaySpinner = false;
          this.confirmationService.confirm({
            header: "Error",
            message: JSON.stringify(response["errors"]),
            accept: () => {},
            acceptLabel: "OK",
            rejectVisible: false
          })
        }else {
          let abi = response["abi"];
          let bytecode = response["bytecode"];
          this.spinnerMsg = "Deploying Contract to chain..."
          const deployResponse = this.deploymentService.deployContract(abi, bytecode);
          this.displaySpinner = false;
          this.confirmationService.confirm({
            header: "Deployed",
            message: JSON.stringify(deployResponse),
            accept: () => {this.displaySpinner = false;},
            acceptLabel: "OK",
            rejectVisible: false
          })
        }
      });
    }else{
      this.displaySpinner = false
      this.confirmationService.confirm({
        header: "Error",
        message: "Could not parse contract identifier, please name the contract",
        accept: () => {},
        acceptLabel: "OK",
        rejectVisible: false
      })
    }

    
  }
}
