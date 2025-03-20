import { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Loading from '../components/ui/Loading';

function Settings() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSaving(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <Button
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <Loading size="sm" variant="white" className="mr-2" />
              Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </Button>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <Card.Header>
            <Card.Title>Profile Settings</Card.Title>
            <Card.Description>
              Manage your account information and preferences
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Display Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your display name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  rows={3}
                  placeholder="Tell us about yourself"
                />
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Wallet Settings */}
        <Card>
          <Card.Header>
            <Card.Title>Wallet Settings</Card.Title>
            <Card.Description>
              Configure your wallet and transaction preferences
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Default Gas Price (Gwei)
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter gas price"
                />
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="autoApprove"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label
                  htmlFor="autoApprove"
                  className="text-sm font-medium text-gray-700"
                >
                  Auto-approve transactions under 0.1 ETH
                </label>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Notification Settings */}
        <Card>
          <Card.Header>
            <Card.Title>Notification Settings</Card.Title>
            <Card.Description>
              Choose how you want to receive updates
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="emailNotif"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label
                  htmlFor="emailNotif"
                  className="text-sm font-medium text-gray-700"
                >
                  Email notifications
                </label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="pushNotif"
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <label
                  htmlFor="pushNotif"
                  className="text-sm font-medium text-gray-700"
                >
                  Push notifications
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Minimum Transaction Amount for Notifications
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter amount in ETH"
                />
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Danger Zone */}
        <Card>
          <Card.Header>
            <Card.Title className="text-red-600">Danger Zone</Card.Title>
            <Card.Description>
              Irreversible account actions
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <Button
                variant="danger"
                className="w-full"
              >
                Delete Account
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default Settings; 