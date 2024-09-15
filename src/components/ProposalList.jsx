import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const fetchProposals = async () => {
  // Replace with actual API call
  const response = await fetch('https://api.lidonation.com/v1/catalysts/proposals');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ProposalList = () => {
  const { data: proposals, isLoading, error } = useQuery({
    queryKey: ['proposals'],
    queryFn: fetchProposals,
  });

  if (isLoading) return <div>Loading proposals...</div>;
  if (error) return <div>Error fetching proposals: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Active Proposals</h2>
      <div className="space-y-4">
        {proposals?.map((proposal) => (
          <Card key={proposal.id}>
            <CardHeader>
              <CardTitle>{proposal.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{proposal.summary}</p>
              <p>Requested Funds: {proposal.requested_funds}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProposalList;