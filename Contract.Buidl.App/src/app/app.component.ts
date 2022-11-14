import { Component, OnInit } from '@angular/core';
import { DeployService } from './services/deploy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Contract.Buidl';

  address:string=""

  constructor(private deployerService: DeployService){
    deployerService.connectWallet()
    this.address = deployerService.walletAddress;
  }

  ngOnInit(){
  }
}
