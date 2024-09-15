import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({ searchTerm, category });
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Search & Filter</h2>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Input
          type="text"
          placeholder="Search proposals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white bg-opacity-20 backdrop-blur-lg"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="bg-white bg-opacity-20 backdrop-blur-lg">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="defi">DeFi</SelectItem>
            <SelectItem value="governance">Governance</SelectItem>
            <SelectItem value="developer-ecosystem">Developer Ecosystem</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleSearch} className="bg-purple-600 hover:bg-purple-700">Search</Button>
      </div>
    </div>
  );
};

export default SearchFilter;
