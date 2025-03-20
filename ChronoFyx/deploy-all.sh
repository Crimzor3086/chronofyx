#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting ChronoFyx Deployment Process...${NC}"

# Check if .env exists, if not create from example
if [ ! -f "./chrono-frontend/.env" ]; then
    echo "Creating .env from .env.example..."
    cp ./chrono-frontend/.env.example ./chrono-frontend/.env
fi

# Install dependencies
echo -e "\n${GREEN}Installing dependencies...${NC}"
npm install
cd chrono-frontend && npm install && cd ..

# Deploy smart contract
echo -e "\n${GREEN}Deploying smart contract...${NC}"
npx hardhat run scripts/deploy.js --network educhain

# Check if contract deployment was successful
if [ $? -ne 0 ]; then
    echo -e "${RED}Smart contract deployment failed!${NC}"
    exit 1
fi

# Deploy frontend
echo -e "\n${GREEN}Deploying frontend...${NC}"
cd chrono-frontend
chmod +x deploy.sh
./deploy.sh

if [ $? -ne 0 ]; then
    echo -e "${RED}Frontend deployment failed!${NC}"
    exit 1
fi

echo -e "\n${GREEN}Deployment complete!${NC}"
echo "Check deployment-info.json for contract details" 