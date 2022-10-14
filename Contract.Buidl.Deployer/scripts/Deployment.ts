import { ethers } from "hardhat";
import { contract_name } from "./ContractName"

async function main() {

    
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Contract = await ethers.getContractFactory(`${contract_name.name}`);
    const deployTx = await Contract.deploy();
    deployTx.deployed();
  
    console.log("Contract address:", deployTx.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });