import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fetchProposals = async () => {
  const response = await fetch('https://api.lidonation.com/v1/catalysts/proposals?page=1&perPage=10');
  if (!response.ok) {
    throw new Error('Failed to fetch proposals');
  }
  return response.json();
};

const ProposalList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['proposals'],
    queryFn: fetchProposals,
  });

  if (isLoading) return <div className="text-center">Loading proposals...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Active Proposals</h2>
      <div className="space-y-4">
        {data?.data.map((proposal) => (
          <Card key={proposal.id} className="bg-white bg-opacity-20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>{proposal.title}</CardTitle>
              <Badge>{proposal.challenge}</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{proposal.summary}</p>
              <p>Requested Funds: {proposal.amount_requested} ADA</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProposalList;
