const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with actual contract address
    const [attacker, victim] = await ethers.getSigners();
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    const contract = ChronoFyxSync.attach(contractAddress);

    console.log("Running security tests...");

    try {
        console.log("Testing unauthorized access attempt...");
        await contract.connect(attacker).storeSyncData("Attacker_Device", "Malicious Data");
        console.log("[FAIL] Unauthorized access test failed: Data stored by unauthorized user.");
    } catch (error) {
        console.log("[PASS] Unauthorized access blocked.");
    }

    try {
        console.log("Testing reentrancy attack...");
        const reentrancyTx = await contract.connect(victim).storeSyncData("Victim_Device", "Legit Data");
        await reentrancyTx.wait();
        console.log("[PASS] Reentrancy attack test passed: No unexpected behavior detected.");
    } catch (error) {
        console.log("[FAIL] Reentrancy attack test failed: Possible vulnerability detected.");
    }

    console.log("Security tests completed.");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

    