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
    try {
      const abi = compiledContract["contracts"]["contractbuidl"]["HelloWorld"]["abi"];
      const bytecode = compiledContract["contracts"]["contractbuidl"]["HelloWorld"]["evm"]["bytecode"]["object"];
      return {abi: abi, bytecode: bytecode};
    } catch (error) {
      const errors = compiledContract["errors"];
      return {errors: errors};
    }
  }

}