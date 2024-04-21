import React, { useState, useEffect } from "react";

const NewsGrid = () => {
  const [news, setNews] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(40);

  const handleShowMore = () => {
    const newVisibleArticles = Math.min(visibleArticles + 40, news.length);
    setVisibleArticles(newVisibleArticles);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v2/news/everything?q=top");
        const data = await response.json();
        if (data && data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          console.error("Articles data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mx-10 mt-7">News</h2>
      <div className="border-b-2 border-black mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 mx-10 mb-10">
        {news.slice(0, visibleArticles).map((article, index) => {
          if (article.title !== "[Removed]") {
            return (
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden relative" key={index}>
                <div className="bg-white">
                  <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gray-300 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="p-4 relative z-10">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:underline">{article.title}</h3>
                    <p className="text-sm text-gray-600">{article.description}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-blue-500 hover:underline">Read more</span>
                    </div>
                  </div>
                </div>
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
      {visibleArticles < news.length && (
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 my-4" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default NewsGrid;
