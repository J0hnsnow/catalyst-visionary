import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const fetchFundInsights = async () => {
  const response = await fetch('https://api.lidonation.com/v1/catalysts/funds');
  if (!response.ok) {
    throw new Error('Failed to fetch fund insights');
  }
  return response.json();
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const FundInsights = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['fundInsights'],
    queryFn: fetchFundInsights,
  });

  if (isLoading) return <div className="text-center">Loading fund insights...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  const chartData = data?.data.map(fund => ({
    name: `Fund ${fund.id}`,
    value: fund.total_budget,
  })) || [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fund Insights</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
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
