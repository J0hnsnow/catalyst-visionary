import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({ searchTerm, category });
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Search & Filter</h2>
      <div className="flex space-x-4">
        <Input
          type="text"
          placeholder="Search proposals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
};

export default SearchFilter;