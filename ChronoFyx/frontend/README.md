# ChronoFyx Frontend

ChronoFyx is a decentralized identity verification and synchronization system leveraging Zero-Knowledge Proofs (ZKPs). This repository contains the frontend built with **React (Vite)** and **Tailwind CSS**.

## 🚀 Features

- **Wallet Connection** – Seamless crypto wallet integration.
- **Identity Verification** – Secure, private authentication using ZKPs.
- **Transaction Monitoring** – Real-time tracking of synchronized transactions.
- **Decentralized Storage** – Securely stores data on IPFS.
- **User Dashboard** – Manage identity and transactions easily.
- **Live Syncing** – Ensures data consistency across the platform.

---

## 💂️ Project Structure

```
chrono-frontend/
│── public/                  # Static assets
│── src/                     # Source code
│   ├── components/          # UI components
│   │   ├── Navbar.jsx
│   │   ├── WalletConnect.jsx
│   │   ├── Dashboard.jsx
│   │   ├── TransactionList.jsx
│   │   ├── Loader.jsx
│   │   ├── Profile.jsx
│   │   ├── Verification.jsx
│   │   ├── Sync.jsx
│   │   ├── NotFound.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   ├── utils/               # Helper functions
│   │   ├── contract.js
│   │   ├── format.js
│   │   ├── constants.js
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│── .env                     # Environment variables
│── tailwind.config.js       # Tailwind CSS configuration
│── vite.config.js           # Vite configuration
│── package.json             # Dependencies & scripts
│── README.md                # Project documentation
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/chrono-frontend.git
cd chrono-frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root directory and add the necessary variables:
```env
VITE_APP_CONTRACT_ADDRESS=your_contract_address
VITE_APP_RPC_URL=your_rpc_url
VITE_APP_NETWORK_ID=your_network_id
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```
The app should now be running on **http://localhost:3000/** 🚀

---

## 🏢 Build & Deploy

To build the project for production:
```sh
npm run build
```
This generates optimized files in the `dist/` folder, ready for deployment.

---

## ✅ Future Enhancements
- Multi-wallet support
- Improved UI/UX animations
- Enhanced error handling
- Dark mode

---

## 💜 License
This project is licensed under the **MIT License**.  

---

## 🤝 Contributing
We welcome contributions! Feel free to fork the repo, make your changes, and submit a pull request.  

---


---

