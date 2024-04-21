import React from 'react';
import { useState } from 'react';

import NoResults from '../others/NoResults';

function SearchResultsDisplay({ articles }) {

  const [visibleResults, setVisibleResults] = useState(10);

  const handleShowMore = () => {
    setVisibleResults(prev => prev + 10);
  };

  return (
    <>
      { articles && articles.length === 0? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 gap-4 mt-4 mb-4">
          {articles && articles.slice(0, visibleResults).map((article, index) => {
            if (article.title !== "[Removed]") {
              return (
                <a key={index} href={article.url} className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex items-center w-3/5 ">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    {article.publishedAt}
                  </div>
                  <div className="flex-grow px-6 py-4">
                    <h3 className="font-bold text-xl mb-2 hover:underline">{article.title}</h3>
                    <p className="text-gray-700 text-base mb-2">{article.description}</p>
                    <p className="text-gray-600 text-sm">{article.author}</p>
                  </div>
                  <img src={article.urlToImage} alt={article.title} className="object-cover w-1/3" />
                </a>
              );
            } else {
              return null;
            }
          })}
          {articles && articles.length > visibleResults && (
            <button onClick={handleShowMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4 m-auto mb-10">
              Show More
            </button>
          )}
        </div>
      )}
    </>
  );
}
export default SearchResultsDisplay
