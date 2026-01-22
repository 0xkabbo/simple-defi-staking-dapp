# Simple DeFi Staking DApp

A professional, lightweight starter kit for building a Staking DApp on Ethereum or EVM-compatible chains. This repository demonstrates how to lock ERC-20 tokens in a smart contract to earn synthetic rewards over time.

## Features
- **Smart Contract:** Solidity-based staking mechanism.
- **Frontend:** Plain HTML/CSS/JS for easy integration.
- **Scripts:** Hardhat deployment scripts included.
- **Flat Structure:** All files are in the root for simplicity.

## Setup
1. Install dependencies: `npm install`
2. Configure `.env` with your RPC URL and Private Key.
3. Deploy contract: `npx hardhat run deploy.js --network goerli`
4. Update `app.js` with the new contract address.
5. Open `index.html` to interact.

## Tech Stack
- Solidity ^0.8.0
- Ethers.js
- Hardhat
