# ChronoFyx

A decentralized, blockchain-powered synchronization system with DAO governance.

## Features

- 🔒 Secure wallet integration with MetaMask and other Web3 wallets
- 🌐 Multi-chain support (Ethereum Mainnet and Sepolia Testnet)
- 📊 Real-time transaction monitoring
- 🏛️ DAO governance system
- 📱 Modern, responsive UI with Tailwind CSS
- 🔄 Real-time blockchain data synchronization

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MetaMask or another Web3 wallet
- WalletConnect project ID (get it from [cloud.walletconnect.com](https://cloud.walletconnect.com/))

## Environment Variables

Create a `.env` file in the `frontend` directory with the following variables:

```env
# Required for WalletConnect v2
VITE_WALLET_CONNECT_PROJECT_ID=your-walletconnect-project-id

# Blockchain Network
VITE_NETWORK_ID=1
VITE_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/your-api-key
VITE_CHAIN_ID=1

# Contract Addresses
VITE_DAO_GOVERNANCE_ADDRESS=0x0000000000000000000000000000000000000000

# API Keys
VITE_ALCHEMY_API_KEY=your-alchemy-api-key
VITE_INFURA_API_KEY=your-infura-api-key

# Optional Features
VITE_ENABLE_TESTNETS=true
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ChronoFyx.git
cd ChronoFyx
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
ChronoFyx/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Transactions.tsx
│   │   │   └── Settings.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env
│   └── package.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- wagmi
- RainbowKit
- React Router
- @tanstack/react-query

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 