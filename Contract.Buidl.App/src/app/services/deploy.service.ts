import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseItem, Contract } from '../grammer/source-unit';
import { ethers } from 'ethers';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class DeployService {

  contractName:string = "";
  ENDPOINT_COMPILE: string = "https://cbcompile.onrender.com/compile";
  ENDPOINT_DEPLOY:string = "https://nile.trongrid.io/wallet/deploycontract";
  connectedChain:string = "";
  
  constructor(private httpClient: HttpClient, private walletService: WalletService) {
  }
  
  compileContract(contract:string) {
    let body = {
      name: this.contractName,
      contract: contract
    }
    return this.httpClient.post(this.ENDPOINT_COMPILE, body);
  }

  deployContract(abi:any, bytecode:string){
    switch (this.connectedChain){
      case "tron":
        return this.deployToTron(abi, bytecode);
      case "aurora":
        return this.deployToAurora(abi, bytecode)
      default:
        return "error";
    }
  }
  
  async deployToAurora(abi: any, bytecode: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractFactory = new ethers.ContractFactory(abi, bytecode, signer);
    const contract = await contractFactory.deploy();
    return contract.address;
  }

  deployToTron(abi:any, bytecode:string){
    let body = {
      abi: abi,
      bytecode: bytecode,
      owner_address: this.walletService.getTronWalletHex(),
      name: this.contractName,
    }
    this.httpClient.post(this.ENDPOINT_DEPLOY, body, {headers: {"Content-Type": "application/json", "TRON-PRO-API-KEY": "457b72d6-e7f2-4060-9e59-98267e1dafc0"}}).subscribe(data => {
      let response : any = data;
      return response;
    })
  }
  
  searchContractName(items: BaseItem[]) {
    for (let i = 0; i < items.length; i++){
      if (items[i].name == "Contract"){
        let contractElement: any = items[i];
        console.log(contractElement)
        const nameObtained = contractElement.identifier;
        console.log(nameObtained)
        this.contractName = nameObtained;
        return true;
      }
    }
    return false;
  }
}

