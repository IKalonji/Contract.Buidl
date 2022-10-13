import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeployService {

  ENDPOINT: string = "http://localhost:5000/deploy";

  constructor(private httpClient: HttpClient) { }

  deployContract(contract:string, name:string) {
    console.log("Deploying")
    let requestBody = {
      chain: "",
      name: name,
      contract: contract
    }

    return this.deploy(requestBody)
  }

  private deploy(body: any){
    return this.httpClient.post(this.ENDPOINT, body)
  }

}
