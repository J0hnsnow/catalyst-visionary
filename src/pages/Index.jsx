import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from '../components/Navigation';
import ProposalList from '../components/ProposalList';
import VotingHistory from '../components/VotingHistory';
import FundInsights from '../components/FundInsights';
import UserDashboard from '../components/UserDashboard';
import SearchFilter from '../components/SearchFilter';

const queryClient = new QueryClient();

const Index = () => {
  const [searchParams, setSearchParams] = useState({ searchTerm: '', category: '' });

  const handleSearch = (params) => {
    setSearchParams(params);
    // Here you would typically trigger a new API call with the search params
    // For now, we'll just update the state
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-opacity-50 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Cardano Catalyst Explorer</h1>
          <Navigation />
          <SearchFilter onSearch={handleSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ProposalList searchParams={searchParams} />
            </div>
            <div>
              <UserDashboard />
              <VotingHistory />
              <FundInsights />
            </div>
          </div>
        </div>
        <footer className="text-center py-4 mt-8 bg-black bg-opacity-50">
          <p>&copy; 2024 Built by Dennis &amp; Bricks</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default Index;
