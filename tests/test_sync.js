const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with actual contract address
    const [deployer] = await ethers.getSigners();
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    const contract = ChronoFyxSync.attach(contractAddress);
    
    console.log("Testing data synchronization...");
    
    // Store sync data
    const deviceId = "Device_123";
    const data = "Temperature: 25C";
    let tx = await contract.storeSyncData(deviceId, data);
    await tx.wait();
    console.log("Data stored successfully.");
    
    // Retrieve sync data
    const dataHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["string", "string", "uint256"], [deviceId, data, Math.floor(Date.now() / 1000)]));
    const syncData = await contract.retrieveSyncData(dataHash);
    console.log("Retrieved Sync Data:", syncData);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
