import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeployService {

  walletAddress: string = "";
  walletConnected: boolean = false;

  constructor(private httpClient: HttpClient) {
   }

  async compileContract(contract:string) {
    let body = {
      contract: contract
    }

    return this.httpClient.post(`http://localhost:3000/compile`, body).subscribe( data => {
      let contractABI: any = data;
      console.log(contractABI)
    })
  }

}
