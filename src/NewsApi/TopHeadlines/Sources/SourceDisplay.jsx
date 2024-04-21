import React, { useState } from 'react';

import NoResults from '../../others/NoResults';

function SourceDisplay({ sources }) {
  const [displayCount, setDisplayCount] = useState(20);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 20);
  };

  return (
    <div className="">
      {sources && sources.length === 0 ? ( 
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 mt-10 mx-6 ">
          {sources && sources.slice(0, displayCount).map((source, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-300 relative bg-white">
              <a href={source.url} className="block">
                <div className="px-4 py-2">
                  <h3 className="font-bold text-lg mb-2 hover:underline">{source.name}</h3>
                  <p className="text-gray-700 text-base mb-2">{source.description}</p>
                  <p className="text-gray-600 text-sm">Language: {source.language} | Country: {source.country}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
      {sources && sources.length > displayCount && (
        <div className="text-center mt-4">
          <button onClick={handleShowMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default SourceDisplay;
