import React from 'react';
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to ChronoFyx
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A decentralized, blockchain-powered synchronization system with DAO governance.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {isConnected ? (
            <Link
              to="/dashboard"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Go to Dashboard
            </Link>
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">
                Connect your wallet to get started
              </p>
              <ConnectButton />
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Decentralized</h3>
          <p className="mt-2 text-sm text-gray-500">
            Built on blockchain technology for maximum security and transparency.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">DAO Governance</h3>
          <p className="mt-2 text-sm text-gray-500">
            Community-driven decision making through decentralized autonomous organization.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Secure</h3>
          <p className="mt-2 text-sm text-gray-500">
            Enterprise-grade security with multi-signature support and audit trails.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home; 