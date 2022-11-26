import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  metamaskWallet:string = "";
  tronWallet: any;
  tronWalletHex: any;
  walletConnected: boolean = false;

  connectedWalletAddress: string = "";

  constructor(private confirmationService: ConfirmationService) { }

  connectWallet(chain:string){
    let walletReturned = ""
    switch (chain){
      case "tron":
        walletReturned = this.tronlinkWalletConnect();
        break;
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
      console.log("in here");
      this.tronWallet = window.tronWeb.defaultAddress.base58;
      this.connectedWalletAddress = this.tronWallet;
      this.tronWalletHex = window.tronWeb.address.toHex(this.tronWallet);
      this.walletConnected = true;
    } else if (!window.tronWeb){
      this.confirmationService.confirm({
        header: "Tronlink not available",
        message: "Please install Tronlink extension in order to connect and use the app.",
        acceptLabel: "CONNECT",
        closeOnEscape: false,
        rejectVisible: false,
        acceptVisible: false
      })
    }
    return this.tronWallet;
  }

  async metamaskWalletConnect(){
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err:any) => {
        if (err.code === 4001){
          this.confirmationService.confirm({
            header: "Connect wallet to proceed!",
            message: "You need to connect your wallet to use the DEX",
            accept: () => {},
            acceptLabel: "OK",
            acceptIcon: "pi pi-thumbs-up",
            dismissableMask: false,
            rejectVisible: false,
            closeOnEscape: false,
          })
        }
      });
      this.metamaskWallet = accounts[0];
      this.connectedWalletAddress = this.metamaskWallet;
      console.log(this.metamaskWallet);
      this.walletConnected = true;
  }
  return this.metamaskWallet
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

  getConnectedWallet(): Observable<string>{
    
    return new Observable<string>(observer => {
      observer.next(this.connectedWalletAddress);
      observer.complete();
    }); 
  }

}
