require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.20" },
      { version: "0.8.22" }
    ]
  },
  networks: {
    educhain: {
      url: "wss://open-campus-codex-sepolia.drpc.org",
      chainId: 656476, // EduChain Chain ID
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Uses private key from .env
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY // For contract verification
  },
  mocha: {
    timeout: 20000 // Increase timeout for tests
  }
};
