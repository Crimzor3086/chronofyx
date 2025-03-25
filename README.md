# ChronoFyx

A decentralized, blockchain-powered synchronization system with DAO governance.

## Project Structure

```
ChronoFyx/
├── contracts/               # Smart contracts
│   └── DAOGovernance.sol
├── frontend/               # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/                # Python backend service
│   ├── chronofyx/         # Python package
│   ├── tests/
│   ├── setup.py
│   └── requirements.txt
├── scripts/                # Deployment and utility scripts
│   ├── deploy.js          # Contract deployment
│   └── utils/             # Utility scripts
├── test/                   # Smart contract tests
├── docs/                   # Documentation
├── hardhat.config.js      # Hardhat configuration
└── package.json           # Root package.json
```

## Technology Stack

- **Frontend:**
  - React with Vite
  - wagmi v2 for Web3 integration
  - TailwindCSS for styling
  - RainbowKit for wallet connection

- **Smart Contracts:**
  - Solidity ^0.8.20
  - Hardhat for development and testing
  - OpenZeppelin contracts

- **Backend Service:**
  - Python ≥3.7
  - Flask for API
  - IPFS for decentralized storage

## Setup Instructions

### Prerequisites
- Node.js ≥18
- Python ≥3.7
- Git

### Smart Contracts & Frontend
1. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. Deploy contracts:
   ```bash
   npx hardhat run scripts/deploy.js --network <network>
   ```

4. Start frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

### Backend Service
1. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   cd backend
   pip install -e .
   ```

3. Start the backend service:
   ```bash
   python -m chronofyx
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to contribute and enhance ChronoFyx! 🚀

