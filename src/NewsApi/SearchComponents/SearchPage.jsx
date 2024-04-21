import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import SearchResultsDisplay from './SearchResultsDisplay';
import AdvancedSearch from '../AdvanceSearch/AdvanceSearch';

function SearchPage() {

    const baseUrl = 'http://localhost:8080/api/v2/news/everything';
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');

    const [domains, setDomains] = useState('');
    const [language, setLanguage] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [fetchedArticles, setFetchedArticles] = useState([]);

    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {


        const updatedParams = new URLSearchParams();
        if (searchQuery) updatedParams.append('q', searchQuery);
        if (domains) updatedParams.append('domains', domains);
        if (language) updatedParams.append('language', language);
        if (fromDate) updatedParams.append('from', fromDate);
        if (toDate) updatedParams.append('to', toDate);
        if (sortBy) updatedParams.append('sortBy', sortBy);

        const updatedUrl = `${baseUrl}?${updatedParams.toString()}`;

        // navigate(`${updatedParams.toString()}`)

        const fetchData = async () => {
            try {
                const response = await fetch(updatedUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setTotalResults(jsonData.totalResults);
                setFetchedArticles(jsonData.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchQuery, domains, language, fromDate, toDate, sortBy]);


    return (
        <div>
            <div className='flex bg-gray-100 p-6 rounded-lg shadow-m'>
                <div className="flex flex-col m-auto">
                    <p className="text-sm text-gray-600">Showing {totalResults} results for:</p>
                    <h2 className="text-3xl font-semibold mb-4">{searchQuery}</h2>

                </div>
                <div className="flex flex-col relative m-auto">
                    <AdvancedSearch>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="domains" className="mb-1 text-sm">Domain</label>
                                <input
                                    id="domains"
                                    className="w-full text-sm md:w-auto rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="text"
                                    placeholder="Domains"
                                    value={domains}
                                    onChange={(e) => setDomains(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="language" className="mb-1 text-sm">Language</label>
                                <select
                                    id="language"
                                    className="w-full md:w-auto text-sm rounded-md border  border-gray-300 focus:outline-none focus:border-indigo-500"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option value="">All Languages</option>
                                    <option value="ar">Arabic</option>
                                    <option value="de">German</option>
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="hi">Hindi</option>
                                    <option value="it">Italian</option>
                                    <option value="nl">Dutch</option>
                                    <option value="no">Norwegian</option>
                                    <option value="pt">Portuguese</option>
                                    <option value="ru">Russian</option>
                                    <option value="sv">Swedish</option>
                                    <option value="ud">Undefined</option>
                                    <option value="zh">Chinese</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="fromDate" className="mb-1 text-sm">From</label>
                                <input
                                    id="fromDate"
                                    className="w-full md:w-auto text-sm rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="toDate" className="mb-1 text-sm">To</label>
                                <input
                                    id="toDate"
                                    className="w-full md:w-auto text-sm rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="sortBy" className="mb-1 text-sm">Sort By</label>
                                <select
                                    id="sortBy"
                                    className="w-full md:w-auto rounded-md border text-sm border-gray-300 focus:outline-none focus:border-indigo-500"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="popularity" >Popularity</option>
                                    <option value="publishedAt">Published At</option>
                                    <option value="relevance">Relevance</option>
                                </select>
                            </div>
                        </div>
                    </AdvancedSearch>

                </div>
            </div>
            <SearchResultsDisplay articles={fetchedArticles} />
        </div>
    );
}

export default SearchPage;
