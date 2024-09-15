import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const fetchVotingHistory = async () => {
  const response = await fetch('https://api.lidonation.com/v1/catalysts/funds');
  if (!response.ok) {
    throw new Error('Failed to fetch voting history');
  }
  return response.json();
};

const VotingHistory = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['votingHistory'],
    queryFn: fetchVotingHistory,
  });

  if (isLoading) return <div className="text-center">Loading voting history...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  const chartData = data?.data.map(fund => ({
    name: `Fund ${fund.id}`,
    votes: fund.total_votes,
  })) || [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Voting History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
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
