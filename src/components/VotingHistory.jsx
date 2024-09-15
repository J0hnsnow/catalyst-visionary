import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fetchVotingHistory = async () => {
  // Replace with actual API call
  const response = await fetch('https://api.lidonation.com/v1/catalysts/voting-history');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const VotingHistory = () => {
  const { data: votingHistory, isLoading, error } = useQuery({
    queryKey: ['votingHistory'],
    queryFn: fetchVotingHistory,
  });

  if (isLoading) return <div>Loading voting history...</div>;
  if (error) return <div>Error fetching voting history: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Voting History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={votingHistory}>
          <XAxis dataKey="fund" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="votes" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VotingHistory;