const fs = require("fs");
const path = require("path");

const cacheDirs = ["./cache", "./zkp/cache", "./build/cache"];

async function clearCache() {
    console.log("Clearing cache directories...");
    
    cacheDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
            fs.readdirSync(dir).forEach(file => {
                const filePath = path.join(dir, file);
                fs.unlinkSync(filePath);
            });
            console.log(`Cleared cache in: ${dir}`);
        }
    });
    
    console.log("Cache cleared successfully.");
}

clearCache();
