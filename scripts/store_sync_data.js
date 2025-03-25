const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with actual contract address
    const [signer] = await ethers.getSigners();
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    const contract = ChronoFyxSync.attach(contractAddress);
    
    console.log("Storing sync data...");
    
    const deviceId = "Device_789";
    const data = "Pressure: 1013 hPa";
    
    try {
        let tx = await contract.connect(signer).storeSyncData(deviceId, data);
        await tx.wait();
        console.log("Sync data stored successfully.");
    } catch (error) {
        console.error("Error storing sync data:", error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
