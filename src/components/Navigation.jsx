import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="mb-8">
      <ul className="flex justify-center space-x-4">
        <li><Button variant="ghost">Proposals</Button></li>
        <li><Button variant="ghost">Voting History</Button></li>
        <li><Button variant="ghost">Fund Insights</Button></li>
        <li><Button variant="ghost">Dashboard</Button></li>
      </ul>
    </nav>
  );
};

export default Navigation;