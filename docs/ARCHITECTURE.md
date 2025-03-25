# ChronoFyxSync Architecture

## Overview
ChronoFyxSync is a blockchain-based decentralized data synchronization system designed for secure, tamper-proof storage of IoT device data on the EduChain Testnet. The architecture consists of multiple layers, each handling specific tasks.

## Components

### 1️⃣ **Smart Contract Layer**
- **ChronoFyxSync.sol** (Deployed on EduChain Testnet)
- Handles storage, retrieval, and verification of synchronized data.
- Uses **UUPS Upgradeable Proxy** for contract upgradability.
- Emits `DataSynced` event on successful data storage.

### 2️⃣ **P2P Network Layer**
- Enables peer-to-peer communication between nodes.
- Uses **LibP2P** or **WebSockets** for real-time data exchange.
- Ensures data consistency before blockchain storage.

### 3️⃣ **Data Storage Layer**
- Stores data hashes on EduChain.
- Raw data stored using **IPFS/Filecoin** for decentralized, tamper-proof storage.
- Each device generates a **unique data hash** to prevent duplication.

### 4️⃣ **Consensus Layer**
- Utilizes **Proof-of-Authority (PoA)** consensus on EduChain Testnet.
- Validates transactions before committing them to the ledger.
- Ensures data integrity through **cryptographic hashing**.

### 5️⃣ **Security & Identity Layer**
- Uses **Zero-Knowledge Proofs (ZKPs)** to ensure privacy.
- Supports **MetaMask authentication** for user transactions.
- Implements role-based access control to restrict unauthorized modifications.

### 6️⃣ **API & Integration Layer**
- Exposes contract functions via **Web3.js** and **Ethers.js**.
- Supports **MetaMask & WalletConnect** for seamless integration.
- RESTful API endpoints for frontend & IoT applications.

## Data Flow
1. IoT device generates a data entry.
2. Data is **hashed & signed** before transmission.
3. Hash is stored on **EduChain**, raw data in **IPFS/Filecoin**.
4. Data can be retrieved using **retrieveSyncData()** function.
5. MetaMask transactions are validated before execution.

## Next Steps
- Enhance cross-chain compatibility.
- Optimize ZKP implementation.
- Expand support for mobile dApps.