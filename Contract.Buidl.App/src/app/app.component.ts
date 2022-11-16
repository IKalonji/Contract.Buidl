import { Component, OnInit } from '@angular/core';
import { DeployService } from './services/deploy.service';
import {ConfirmationService, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Contract.Buidl';

  walletAddress:string="";
  walletConnected:boolean = false;

  constructor(private deployerService: DeployService, private confirmService: ConfirmationService){
  }

  ngOnInit(){
    this.walletShouldBeConnected()
  }

  walletShouldBeConnected(){
    if (window.tronWeb && window.tronWeb.defaultAddress.base58){
      this.walletAddress = window.tronWeb.defaultAddress.base58;
      this.walletConnected = true;
      console.log("Default Address: ", this.walletAddress);
    } else {
      console.log("in here")
      this.confirmService.confirm({
        header: "Connect TronLink wallet",
        message: "Before proceeding you need to connect to TronLink. Open your Tronlink wallet extension and sign in. Once you've signed in click 'CONNECT'",
        acceptLabel: "CONNECT",
        acceptIcon: PrimeIcons.LINK,
        accept: () => {
          this.walletShouldBeConnected();
        },
        closeOnEscape: false,
        rejectVisible: false,
      })
    }
  }
  
}
