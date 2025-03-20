#!/bin/bash

# Build the frontend
echo "Building the frontend..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

# Deploy to hosting service (example using surge, you can modify for your preferred hosting)
echo "Deploying to hosting service..."
if command -v surge &> /dev/null; then
    surge dist chronofyx.surge.sh
else
    echo "Please install surge first: npm install -g surge"
    exit 1
fi

echo "Frontend deployment complete!" 