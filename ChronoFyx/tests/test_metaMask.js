const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with actual contract address
    const [signer] = await ethers.getSigners();
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    const contract = ChronoFyxSync.attach(contractAddress);
    
    console.log("Testing MetaMask transaction...");
    
    // Store sync data via MetaMask
    const deviceId = "Device_456";
    const data = "Humidity: 60%";
    let tx = await contract.connect(signer).storeSyncDataMetaMask(deviceId, data);
    await tx.wait();
    console.log("Data stored successfully via MetaMask.");
    
    // Retrieve sync data
    const dataHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["string", "string", "uint256", "address"], [deviceId, data, Math.floor(Date.now() / 1000), signer.address]));
    const syncData = await contract.retrieveSyncData(dataHash);
    console.log("Retrieved Sync Data:", syncData);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });