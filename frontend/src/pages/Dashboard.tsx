import React from 'react';
import { useAccount, useBalance, useChainId } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains';

function Dashboard() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });
  const chainId = useChainId();
  const chain = chainId === mainnet.id ? mainnet : sepolia;

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to ChronoFyx</h1>
        <p className="text-gray-600">Connect your wallet to view your dashboard</p>
        <ConnectButton />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Network: {chain.name}
          </div>
          <ConnectButton />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Total Balance</h2>
          <p className="mt-2 text-3xl font-bold text-primary-600">
            {balance?.formatted || '0.00'} {balance?.symbol || 'ETH'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Active Proposals</h2>
          <p className="mt-2 text-3xl font-bold text-primary-600">0</p>
          <p className="mt-1 text-sm text-gray-500">No active proposals</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Your Voting Power</h2>
          <p className="mt-2 text-3xl font-bold text-primary-600">0</p>
          <p className="mt-1 text-sm text-gray-500">Based on your token balance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="text-center text-gray-500 py-4">
              No recent activity
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Create Proposal
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              View Proposals
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Stake Tokens
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Unstake Tokens
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 