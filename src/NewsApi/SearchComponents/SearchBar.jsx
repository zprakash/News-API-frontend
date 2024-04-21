import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchh = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/search-results?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="max-w-6xl mx-auto mb-3">
  <form onSubmit={handleSearchh} className="relative flex">
    <div className="relative flex-1">
      <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"></path>
        </svg>
      </span>
      <input
        type="text"
        className="p-1 pl-10 rounded-full text-sm focus:outline-none focus:bg-white w-full border border-gray-300"
        placeholder="Search everything..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    <button type="submit" className="text-sm bg-black text-white rounded-full px-3 py-1 ml-1">
      Search
    </button>
  </form>
</div>
  );
};

export default SearchBar;
