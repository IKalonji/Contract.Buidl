import { Component, OnInit } from '@angular/core';
import { DeployService } from './services/deploy.service';
import {ConfirmationService, PrimeIcons} from 'primeng/api';
import { transition } from '@angular/animations';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Contract.Buidl';

  wallet:string = "";
  walletConnected:boolean = false;
  launchedApp: boolean = false;
  chain: any = "";
  chains = [{name: "tron"},{name: "aurora"}]

  constructor(private deployerService: DeployService, private confirmService: ConfirmationService, private walletService: WalletService){
  }

  ngOnInit(){}

  requestConnection() {
    this.confirmService.confirm({
      header: "Connect wallet",
      message: "Before proceeding you need to connect your wallet. Open your wallet extension and sign in. Once you've signed in click 'CONNECT'",
      acceptLabel: "CONNECT",
      acceptIcon: PrimeIcons.LINK,
      accept: async () => {
        this.walletService.connectWallet(this.chain.name);
      },
      closeOnEscape: false,
      rejectVisible: false,
    })
  }

  launchApp(){
    console.log(this.chain.name)
    this.launchedApp = true;
    this.deployerService.connectedChain = this.chain.name;
    this.requestConnection()
  }
  
}
