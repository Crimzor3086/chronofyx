const fs = require("fs");
const path = require("path");

const backupDir = "./backup";
const dataDir = "./data";

if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
}

async function backupData() {
    console.log("Backing up data...");
    
    if (!fs.existsSync(dataDir)) {
        console.log("No data directory found. Skipping backup.");
        return;
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupFile = path.join(backupDir, `backup_${timestamp}.json`);
    
    const dataFiles = fs.readdirSync(dataDir);
    let backupContent = {};
    
    dataFiles.forEach(file => {
        const filePath = path.join(dataDir, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        backupContent[file] = fileContent;
    });
    
    fs.writeFileSync(backupFile, JSON.stringify(backupContent, null, 2));
    console.log(`Backup completed: ${backupFile}`);
}

backupData();