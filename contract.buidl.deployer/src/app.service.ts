/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ComplieContractDTO } from './models/compile.dto';

const solc = require('solc');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCompileContract(contractDTO: ComplieContractDTO) {

    var contractOptions = {
      language: "Solidity",
      sources: {
        "contractbuidl":{
          content: contractDTO.contract
        }
      },
      settings: {
        outputSelection: {
          '*': {
            '*': ['*']
          }
        }
      }
     }

    const compiledContract = JSON.parse(solc.compile(JSON.stringify(contractOptions)));
    console.log(compiledContract)
    try {
      const abi = compiledContract["contracts"]["contractbuidl"][contractDTO.name]["abi"];
      const bytecode = compiledContract["contracts"]["contractbuidl"][contractDTO.name]["evm"]["bytecode"]["object"];
      return {abi: abi, bytecode: bytecode, full: compiledContract};
    } catch (error) {
      const errors = compiledContract["errors"];
      return {errors: errors};
    }
  }

}