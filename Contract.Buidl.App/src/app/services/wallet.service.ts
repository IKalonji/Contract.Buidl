import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  metamaskWallet:string = "";
  tronWallet: any = "";
  tronWalletHex: any = "";
  walletConnected: boolean = false;

  connectedWalletAddress: string = "";
  walletAddressChanged: Subject<string> = new Subject<string>();

  constructor(private confirmationService: ConfirmationService) {
    this.walletAddressChanged.subscribe((data)=>{
      this.connectedWalletAddress = data
    })
   }

  connectWallet(chain:string){
    let walletReturned = ""
    switch (chain){
      case "tron":
        return this.tronlinkWalletConnect();
      case "evmos":
      case "aurora":
        this.metamaskWalletConnect().then( data =>{
          walletReturned = data;
          return walletReturned;
        });
        break;
      default:
        alert("Chosen chain not supported yet!")
    }
  }

  tronlinkWalletConnect(){
    if (window.tronWeb && window.tronWeb.defaultAddress.base58){
      this.tronWallet = window.tronWeb.defaultAddress.base58;
      this.walletAddressChanged.next(this.tronWallet)
      this.tronWalletHex = window.tronWeb.address.toHex(this.tronWallet);
      this.walletConnected = true;
      return this.tronWallet;
    } else if (!window.tronWeb){
      return this.tronWallet;
    }else {
      return this.tronWallet;
    }
  }

  async metamaskWalletConnect(){
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err:any) => {
        if (err.code === 4001){
        }
      });
      this.metamaskWallet = accounts[0];
      this.walletAddressChanged.next(this.metamaskWallet);
      console.log(this.metamaskWallet);
      this.walletConnected = true;
      return this.metamaskWallet
    }else {
      return this.metamaskWallet
    }
  }

  getMetamaskWallet(){
    return this.metamaskWallet;
  }

  getTronWallet(){
    return this.tronWallet;
  }

  getTronWalletHex(){
    return this.tronWalletHex;
  }

}
