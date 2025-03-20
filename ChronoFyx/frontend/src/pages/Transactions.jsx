import { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import Dropdown from '../components/ui/Dropdown';
import Loading from '../components/ui/Loading';
import Badge from '../components/ui/Badge';

function Transactions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const transactions = [
    {
      id: 1,
      hash: '0x1234...5678',
      type: 'Send',
      amount: '0.5 ETH',
      status: 'completed',
      timestamp: '2024-03-10T12:00:00Z',
    },
    {
      id: 2,
      hash: '0x8765...4321',
      type: 'Receive',
      amount: '1.2 ETH',
      status: 'pending',
      timestamp: '2024-03-10T11:30:00Z',
    },
    {
      id: 3,
      hash: '0xabcd...efgh',
      type: 'Contract',
      amount: '0.1 ETH',
      status: 'failed',
      timestamp: '2024-03-10T11:00:00Z',
    },
  ];

  const statusColors = {
    completed: 'success',
    pending: 'warning',
    failed: 'danger',
  };

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const dropdownItems = [
    {
      label: 'All Transactions',
      onClick: () => console.log('All'),
    },
    {
      label: 'Sent',
      onClick: () => console.log('Sent'),
    },
    {
      label: 'Received',
      onClick: () => console.log('Received'),
    },
    {
      label: 'Contract Interactions',
      onClick: () => console.log('Contract'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
        <div className="flex items-center space-x-4">
          <Dropdown
            trigger={
              <Button variant="outline">
                Filter by Type
              </Button>
            }
            items={dropdownItems}
          />
          <Button>New Transaction</Button>
        </div>
      </div>

      <Card>
        <Card.Header>
          <Card.Title>Transaction History</Card.Title>
          <Card.Description>
            View and manage your recent transactions
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loading size="lg" />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Transaction Hash
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.hash}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant={statusColors[transaction.status]}>
                            {transaction.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(transaction.timestamp).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(transaction)}
                          >
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </Card.Content>
      </Card>

      {/* Transaction Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Transaction Details"
        size="lg"
      >
        {selectedTransaction && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Transaction Hash
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {selectedTransaction.hash}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {selectedTransaction.type}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {selectedTransaction.amount}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <Badge
                  variant={statusColors[selectedTransaction.status]}
                  className="mt-1"
                >
                  {selectedTransaction.status}
                </Badge>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <p className="mt-1 text-sm text-gray-900">
                  {new Date(selectedTransaction.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Transactions; 