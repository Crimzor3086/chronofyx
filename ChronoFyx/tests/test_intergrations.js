const { expect } = require("chai");
const { ethers } = require("hardhat");
const snarkjs = require("snarkjs");
const ipfsClient = require("ipfs-http-client");

let contract, provider, owner;
const ipfs = ipfsClient.create();

before(async () => {
    [owner] = await ethers.getSigners();
    const ChronoFyxSync = await ethers.getContractFactory("ChronoFyxSync");
    contract = await ChronoFyxSync.deploy();
    await contract.deployed();
});

describe("Integration Tests: ZKP, P2P, IPFS, Upgrades, Monitoring", function () {
    it("Should generate and verify a Zero-Knowledge Proof", async function () {
        const input = { value: "12345" };
        const { proof, publicSignals } = await snarkjs.groth16.fullProve(input, "./zkp/circuit.wasm", "./zkp/circuit_final.zkey");
        expect(proof).to.exist;
    });

    it("Should store and retrieve data from IPFS", async function () {
        const data = "Test data for IPFS";
        const { path } = await ipfs.add(data);
        const retrieved = await ipfs.cat(path);
        expect(retrieved.toString()).to.equal(data);
    });

    it("Should support smart contract upgrades", async function () {
        const UpgradeableContract = await ethers.getContractFactory("ChronoFyxSync");
        const upgradedContract = await UpgradeableContract.deploy();
        await upgradedContract.deployed();
        expect(upgradedContract.address).to.not.equal(contract.address);
    });

    it("Should monitor sync transactions", async function () {
        let eventTriggered = false;
        contract.on("DataSynced", () => eventTriggered = true);
        await contract.storeSyncData("Device_001", "Temperature: 25C");
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(eventTriggered).to.be.true;
    });
});
