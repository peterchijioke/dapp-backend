

# My Blockchain Development Project
This repository contains a project I developed as part of the Blockchain Development with Ethereum and EVM-Compatible Blockchains course on LinkedIn Learning. This project demonstrates my understanding and application of blockchain concepts, smart contracts, and decentralized application (DApp) development.

# Project Overview
This project showcases the following key features:

Smart Contracts: Written in Solidity, these contracts handle various blockchain operations.
NFT Creation: Implementation of Non-Fungible Tokens (NFTs) using the ERC-721 standard.
Wallet Integration: Integration with MetaMask for handling blockchain transactions.
User Interface: A React-based UI that interacts with the smart contracts deployed on the blockchain.
Testing: Utilization of the Goerli testnet for testing and debugging the application, with tests run using Truffle and HardHat.




# Project Structure
The repository is structured as follows:

- contracts/: Contains the Solidity smart contracts.
- migrations/: Deployment scripts for the smart contracts.
- src/: Source code for the React application.
- test/: Test scripts for the smart contracts.
- truffle-config.js: Configuration file for Truffle.
- hardhat.config.js: Configuration file for HardHat.

# Getting Started
To run this project locally, follow these steps:

## Prerequisites
Ensure you have the following installed:

- Node.js
- Truffle
- HardHat
- MetaMask extension in your browser



Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/BinaryvilleRobotNFT.ts
```
