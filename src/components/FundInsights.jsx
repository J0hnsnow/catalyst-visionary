import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const fetchFundInsights = async () => {
  // Replace with actual API call
  const response = await fetch('https://api.lidonation.com/v1/catalysts/fund-insights');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const FundInsights = () => {
  const { data: fundInsights, isLoading, error } = useQuery({
    queryKey: ['fundInsights'],
    queryFn: fetchFundInsights,
  });

  if (isLoading) return <div>Loading fund insights...</div>;
  if (error) return <div>Error fetching fund insights: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fund Insights</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={fundInsights}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {fundInsights.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FundInsights;