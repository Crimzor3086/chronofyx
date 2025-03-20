const { ethers, upgrades } = require("hardhat");

async function main() {
    console.log("Deploying ChronoFyxSync contract...");
    
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    const contract = await upgrades.deployProxy(ChronoFyxSync, [], { initializer: "initialize" });
    await contract.deployed();
    
    console.log("ChronoFyxSync deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
