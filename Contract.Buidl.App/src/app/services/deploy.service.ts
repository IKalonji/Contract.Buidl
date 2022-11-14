import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeployService {

  walletAddress: string = "";
  walletConnected: boolean = false;

  deployedEndpoint = "https://ikalonji.pythonanywhere.com"

  constructor(private httpClient: HttpClient) {
    this.connectWallet()
   }

  async compileContract(contract:string) {
    this.connectWallet()
    let body = {
      contract: contract
    }

    return this.httpClient.post(`http://localhost:5000/compile`, body).subscribe( data => {
      let contractABI: any = data;
      console.log(contractABI)
    })

  }

  connectWallet(){
    if (window.tronWeb && window.tronWeb.defaultAddress.base58){
      this.walletAddress = window.tronWeb.defaultAddress.base58;
      this.walletConnected = true;
      console.log("Default Address: ", this.walletAddress);
    }
  }
}
