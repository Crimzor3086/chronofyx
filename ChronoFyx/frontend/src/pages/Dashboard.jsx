import { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import Dropdown from '../components/ui/Dropdown';
import Loading from '../components/ui/Loading';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dropdownItems = [
    {
      label: 'View Details',
      onClick: () => console.log('View details'),
    },
    {
      label: 'Edit',
      onClick: () => console.log('Edit'),
    },
    {
      label: 'Delete',
      onClick: () => console.log('Delete'),
      disabled: true,
    },
  ];

  const handleAction = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setIsModalOpen(true)}
          >
            Create New
          </Button>
          <Dropdown
            trigger={<Button>Actions</Button>}
            items={dropdownItems}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Statistics Cards */}
        <Card>
          <Card.Header>
            <Card.Title>Total Transactions</Card.Title>
            <Card.Description>Last 30 days</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="text-3xl font-bold text-primary-600">1,234</div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Active Users</Card.Title>
            <Card.Description>Currently online</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="text-3xl font-bold text-primary-600">56</div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Success Rate</Card.Title>
            <Card.Description>Transaction success rate</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="text-3xl font-bold text-primary-600">98.5%</div>
          </Card.Content>
        </Card>

        {/* Recent Activity Card */}
        <Card className="md:col-span-2 lg:col-span-3">
          <Card.Header>
            <Card.Title>Recent Activity</Card.Title>
            <Card.Description>Latest transactions and events</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <Loading size="lg" />
                </div>
              ) : (
                Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">Transaction #{index + 1}</h3>
                      <p className="text-sm text-gray-500">
                        Processed {index + 1} hour(s) ago
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAction}
                    >
                      View Details
                    </Button>
                  </div>
                ))
              )}
            </div>
          </Card.Content>
          <Card.Footer>
            <Button variant="outline" className="w-full">
              View All Activity
            </Button>
          </Card.Footer>
        </Card>
      </div>

      {/* Create New Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Transaction"
        description="Enter the details for your new transaction."
        footer={
          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Create
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Transaction Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Dashboard; 