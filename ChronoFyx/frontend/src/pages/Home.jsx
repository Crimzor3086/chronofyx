import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import Alert from '../components/ui/Alert';
import Badge from '../components/ui/Badge';

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
            <Button as={Link} to="/proposals">
              View Proposals
            </Button>
          ) : (
            <Alert
              variant="info"
              title="Get Started"
              className="inline-block text-left"
            >
              Connect your wallet to start participating in governance
            </Alert>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Decentralized Governance</CardTitle>
            <CardDescription>
              Participate in decision-making through our DAO
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant="success">Active</Badge>
              <span className="text-sm text-gray-500">
                3 active proposals
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Secure Synchronization</CardTitle>
            <CardDescription>
              Keep your data secure and synchronized across devices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge>Encrypted</Badge>
              <span className="text-sm text-gray-500">
                End-to-end encryption
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Driven</CardTitle>
            <CardDescription>
              Join our growing community of users and developers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Open Source</Badge>
              <span className="text-sm text-gray-500">
                MIT Licensed
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Button
          variant="secondary"
          as={Link}
          to="/docs"
          size="lg"
        >
          Learn more about ChronoFyx
        </Button>
      </div>
    </div>
  );
}

export default Home; 