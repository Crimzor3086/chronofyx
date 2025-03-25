import React from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-primary-600">ChronoFyx</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          A decentralized platform for time-based governance and decision making.
          Connect your wallet to get started.
        </p>
        <div className="flex justify-center">
          <ConnectButton />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Time-Based Governance</h3>
          <p className="text-gray-600">
            Make decisions based on time-weighted voting power and proposal deadlines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Voting</h3>
          <p className="text-gray-600">
            Participate in governance with secure, transparent, and verifiable voting.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Execution</h3>
          <p className="text-gray-600">
            Quick and efficient execution of approved proposals and decisions.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">0</div>
            <div className="text-sm text-gray-600">Active Proposals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">0</div>
            <div className="text-sm text-gray-600">Total Votes Cast</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">0</div>
            <div className="text-sm text-gray-600">Community Members</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {!isConnected && (
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Connect your wallet to participate in governance and make decisions.
          </p>
          <ConnectButton />
        </div>
      )}
    </div>
  );
}

export default Home; 