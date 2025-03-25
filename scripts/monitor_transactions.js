const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("YOUR_RPC_URL"); // Replace with actual RPC URL
const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with actual contract address
const abi = [
    "event DataSynced(bytes32 indexed dataHash, string deviceId, uint256 timestamp)"
];

const contract = new ethers.Contract(contractAddress, abi, provider);

console.log("Monitoring transactions...");

contract.on("DataSynced", (dataHash, deviceId, timestamp) => {
    console.log(`New Sync Event - Device: ${deviceId}, Timestamp: ${timestamp}, Hash: ${dataHash}`);
});
