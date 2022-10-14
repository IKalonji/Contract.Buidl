import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: { 
    tests: "test" 
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_SECOND!]
    },
    coinex: {
      url: "https://testnet-rpc.coinex.net/",
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
    testnet: {
      url: "https://api.baobab.klaytn.net:8651/",
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    }
  }
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default config;
