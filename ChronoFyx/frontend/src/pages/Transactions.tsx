import React from 'react';

function Transactions() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="text-center text-gray-500">
            No transactions found
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions; 