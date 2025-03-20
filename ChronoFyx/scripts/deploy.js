const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Starting deployment process...");

  // Get the contract factory
  const DAOGovernance = await hre.ethers.getContractFactory("DAOGovernance");
  console.log("Deploying DAOGovernance...");

  // Deploy the contract
  const daoGovernance = await DAOGovernance.deploy();
  await daoGovernance.deployed();

  console.log("DAOGovernance deployed to:", daoGovernance.address);

  // Wait for a few block confirmations to ensure deployment is stable
  console.log("Waiting for block confirmations...");
  await daoGovernance.deployTransaction.wait(5);

  // Verify the contract on Etherscan
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying contract on Etherscan...");
    try {
      await hre.run("verify:verify", {
        address: daoGovernance.address,
        constructorArguments: [],
      });
      console.log("Contract verified successfully");
    } catch (error) {
      console.log("Error verifying contract:", error.message);
    }
  }

  // Update the frontend environment with the new contract address
  const envPath = path.join(__dirname, "../chrono-frontend/.env");
  const envExample = path.join(__dirname, "../chrono-frontend/.env.example");
  
  let envContent = fs.existsSync(envPath)
    ? fs.readFileSync(envPath, "utf8")
    : fs.readFileSync(envExample, "utf8");

  envContent = envContent.replace(
    /VITE_DAO_GOVERNANCE_ADDRESS=.*/,
    `VITE_DAO_GOVERNANCE_ADDRESS=${daoGovernance.address}`
  );

  fs.writeFileSync(envPath, envContent);

  console.log("Deployment complete! Contract address updated in frontend .env");
  
  // Save deployment info
  const deploymentInfo = {
    network: hre.network.name,
    contractAddress: daoGovernance.address,
    deploymentTime: new Date().toISOString(),
    chainId: hre.network.config.chainId
  };

  const deploymentPath = path.join(__dirname, "../deployment-info.json");
  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));
  console.log("Deployment info saved to deployment-info.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
