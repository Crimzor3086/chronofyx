# Deployment Guide

## Prerequisites
Before deploying, ensure you have:
- Installed Node.js and Hardhat
- Configured the EduChain Testnet in `hardhat.config.js`
- Set up MetaMask with EduChain Testnet

## Step 1: Compile the Smart Contract
```sh
npx hardhat compile
```

## Step 2: Deploy to EduChain Testnet
Run the following command to deploy the contract:
```sh
npx hardhat run scripts/deploy.js --network educhain
```

## Step 3: Verify Contract on EduChain Explorer
After deployment, note the contract address and verify it on the EduChain block explorer:
```sh
npx hardhat verify --network educhain CONTRACT_ADDRESS
```

## Step 4: Configure MetaMask
1. Open MetaMask and go to **Settings > Networks**.
2. Add the EduChain Testnet with the correct RPC URL.
3. Import the deployed contract address to interact with it.

## Step 5: Testing the Deployment
Use Hardhat console to interact with the deployed contract:
```sh
npx hardhat console --network educhain
```
Then, call functions like:
```js
const contract = await ethers.getContractAt("ChronoFyxSync", "CONTRACT_ADDRESS");
await contract.storeSyncData("device123", "test data");
```

## Next Steps
- Use `API.md` for function details.
- Follow `SECURITY.md` for best practices.
- Integrate frontend or dApp if needed.

