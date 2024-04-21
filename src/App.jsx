import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./Layout"
import SearchPage from './NewsApi/SearchComponents/SearchPage';
import HomePageContent from './NewsApi/Skeleton/HomePageContent';
import TopHeadlines from './NewsApi/TopHeadlines/TopHeadlines';
import TopHeadliensUrlGenerator from "./NewsApi/TopHeadlines/TopHeadliensUrlGenerator"
import SourceUrlGenerator from "./NewsApi/TopHeadlines/Sources/SourceUrlGenerator"
import SourcesLists from "./NewsApi/TopHeadlines/Sources/SourcesLists"
import NotFound from './NewsApi/others/NotFound';
function App() {

  const [news, setNews] = useState();

  return (
    <>
      <div className='roboto'>
        <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePageContent />} />
            <Route path="/search-results" element={<SearchPage />} />
            <Route path="/top-headlines" element={<TopHeadlines />} />
            <Route path="top-headlines/search" element={<TopHeadlines />} />
            <Route path="/top-headlines/sources" element={<SourcesLists />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Layout>
        </Router>
      </div>
    </>
  );
}

export default App
