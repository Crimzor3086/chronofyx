import React from 'react';
import { useAccount } from 'wagmi';

function Settings() {
  const { address } = useAccount();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Wallet Settings</h2>
            <div className="mt-2 text-sm text-gray-500">
              Connected Address: {address}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Network Settings</h2>
            <div className="mt-2 text-sm text-gray-500">
              Current Network: Ethereum Mainnet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings; 