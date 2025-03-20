const { ethers, upgrades } = require("hardhat");

async function main() {
    const proxyAddress = "YOUR_DEPLOYED_PROXY_ADDRESS"; // Replace with actual proxy address
    
    console.log("Upgrading ChronoFyxSync contract...");
    
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    const upgraded = await upgrades.upgradeProxy(proxyAddress, ChronoFyxSync);
    
    console.log("ChronoFyxSync upgraded at:", upgraded.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });