# ChronoFyxSync API Documentation

## Overview
This document outlines the available smart contract functions for interacting with ChronoFyxSync.

## Smart Contract Address
- **Network**: EduChain Testnet
- **Contract Address**: `To be added after deployment`

## Functions

### **storeSyncData**
Stores device data on the blockchain.
```solidity
function storeSyncData(string memory _deviceId, string memory _data) public;
```
- **Parameters**:
  - `_deviceId`: Unique identifier of the device.
  - `_data`: Data to be stored.
- **Returns**: None
- **Events**: Emits `DataSynced(bytes32 dataHash, string deviceId, uint256 timestamp)`

### **retrieveSyncData**
Retrieves previously stored data using its hash.
```solidity
function retrieveSyncData(bytes32 _dataHash) public view returns (SyncData memory);
```
- **Parameters**:
  - `_dataHash`: The hash of the stored data.
- **Returns**:
  - `SyncData`: Struct containing `timestamp`, `deviceId`, and `data`.
- **Errors**: `"Data not found"` if the hash does not exist.

### **storeSyncDataMetaMask**
Stores data via a MetaMask transaction.
```solidity
function storeSyncDataMetaMask(string memory _deviceId, string memory _data) public;
```
- **Parameters**:
  - `_deviceId`: Device identifier.
  - `_data`: Data to store.
- **Returns**: None
- **Events**: Emits `DataSynced`.
- **MetaMask Required**: Yes

### **getEduChainNetwork**
Returns the network name.
```solidity
function getEduChainNetwork() public pure returns (string memory);
```
- **Returns**: `"EduChain Testnet"`

## Events
```solidity
event DataSynced(bytes32 indexed dataHash, string deviceId, uint256 timestamp);
```
- Triggered when data is successfully stored.

## Usage Examples
### Storing Data (MetaMask)
```js
await contract.storeSyncDataMetaMask("device123", "sensor_data");
```

### Retrieving Data
```js
const data = await contract.retrieveSyncData("0x1234...");
console.log(data);
```

## Next Steps
- Follow `DEPLOYMENT.md` to deploy the contract.
- Use `SECURITY.md` for best practices.
- Extend API with frontend integrations.