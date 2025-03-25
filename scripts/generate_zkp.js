const snarkjs = require("snarkjs");
const fs = require("fs");

async function generateZKP(inputData) {
    const wasmPath = "./zkp/circuit.wasm"; // Path to circuit.wasm
    const zkeyPath = "./zkp/circuit_final.zkey"; // Path to zkey file
    
    console.log("Generating Zero-Knowledge Proof...");
    
    try {
        const { proof, publicSignals } = await snarkjs.groth16.fullProve(inputData, wasmPath, zkeyPath);
        console.log("ZKP generated successfully.");
        
        fs.writeFileSync("./zkp/proof.json", JSON.stringify(proof, null, 2));
        fs.writeFileSync("./zkp/publicSignals.json", JSON.stringify(publicSignals, null, 2));
        
        console.log("Proof and public signals saved.");
    } catch (error) {
        console.error("Error generating ZKP:", error);
    }
}

const inputData = { value: "12345" }; // Example input data

generateZKP(inputData);
