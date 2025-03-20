const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with actual contract address
    const deviceId = "Device_123";
    const data = "Temperature: 25C";
    const timestamp = Math.floor(Date.now() / 1000);
    const dataHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode([
        "string", "string", "uint256"], [deviceId, data, timestamp]
    ));
    
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    const contract = ChronoFyxSync.attach(contractAddress);
    
    console.log("Fetching synced data...");
    
    try {
        const syncData = await contract.retrieveSyncData(dataHash);
        console.log("Retrieved Sync Data:", syncData);
    } catch (error) {
        console.error("Error retrieving sync data:", error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
