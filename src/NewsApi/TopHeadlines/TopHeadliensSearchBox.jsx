import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopHeadliensSearchBox() {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleTopHeadlineSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    navigate(`/top-headlines/search?q=${encodeURIComponent(searchQuery)}`);

  };

  return (
    <>
      <div className="max-w-2xl ">
        <form onSubmit={handleTopHeadlineSearch} className="relative">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center my-auto">
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"></path>
              </svg>
            </span>
            <input
              type="text"
              className="py-2 pl-10 pr-4 rounded-full text-sm focus:outline-none focus:bg-white  border border-gray-300"
              placeholder="Search top headlines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute inset-y- bg-black text-white rounded-full px-3 py-1 ml-1">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TopHeadliensSearchBox;
