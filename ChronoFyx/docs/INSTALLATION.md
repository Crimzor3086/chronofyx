# Installation Guide

## Prerequisites
Ensure you have the following installed before proceeding:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Hardhat](https://hardhat.org/) for smart contract deployment
- [MetaMask](https://metamask.io/) browser extension
- EduChain Testnet RPC configuration

## Step 1: Clone the Repository
```sh
git clone https://github.com/your-repo/ChronoFyx.git
cd ChronoFyx
```

## Step 2: Install Dependencies
```sh
npm install
```

## Step 3: Configure EduChain Testnet
1. Open `hardhat.config.js`.
2. Add the EduChain Testnet RPC URL and account private key.
3. Example:
```js
module.exports = {
  networks: {
    educhain: {
      url: "https://rpc.educhain.com",
      accounts: ["PRIVATE_KEY"]
    }
  }
};
```

## Step 4: Compile Smart Contract
```sh
npx hardhat compile
```

## Step 5: Deploy to EduChain Testnet
```sh
npx hardhat run scripts/deploy.js --network educhain
```

## Step 6: Verify Deployment
After deployment, note the contract address and verify it on the EduChain block explorer.

## Next Steps
- Use `API.md` to interact with the contract.
- Follow `SECURITY.md` for best practices.

