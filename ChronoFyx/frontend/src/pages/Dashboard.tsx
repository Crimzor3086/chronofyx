import React from 'react';
import { useAccount } from 'wagmi';

function Dashboard() {
  const { address } = useAccount();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Total Balance</h2>
          <p className="mt-2 text-3xl font-bold text-primary-600">0.00 ETH</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Active Proposals</h2>
          <p className="mt-2 text-3xl font-bold text-primary-600">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Your Voting Power</h2>
          <p className="mt-2 text-3xl font-bold text-primary-600">0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 