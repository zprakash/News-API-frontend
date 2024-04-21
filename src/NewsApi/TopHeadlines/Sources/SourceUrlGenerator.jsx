import React, { useState, useEffect } from 'react';

import SourceDisplay from './SourceDisplay';
import AdvancedSearch from '../../AdvanceSearch/AdvanceSearch';


function SourceUrlGenerator() {

    const baseUrl = 'http://localhost:8080/api/v2/news/sources';
    
    const [category, setCategory] = useState('');
    const [language, setLanguage] = useState('');
    const [country, setCountry] = useState('');
    const [sources, setSources] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const updatedParams = new URLSearchParams();
            if (category) updatedParams.append('category', category);
            if (language) updatedParams.append('language', language);
            if (country) updatedParams.append('country', country);

            const updatedUrl = `${baseUrl}?${updatedParams.toString()}`;

            const response = await fetch(updatedUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setSources(jsonData.sources);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [category, language, country]);

    return (
        <>
            <div className='flex'>
                <div className='flex rounded-lg shadow-m bg-gray-100  m-auto'>
                    <div className="flex ">
                        <AdvancedSearch  >
                            <div className='flex gap-4'>
                                <div className="flex flex-col">
                                    <label htmlFor="category" className="mb-1 text-sm">category</label>
                                    <select
                                        id="category"
                                        className="w-full md:w-auto rounded-md border text-sm border-gray-300 focus:outline-none focus:border-indigo-500"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="business">Business</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="general">General</option>
                                        <option value="health">Health</option>
                                        <option value="science">Science</option>
                                        <option value="sports">Sports</option>
                                        <option value="technology">Technology</option>
                                    </select>
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
                                    <label htmlFor="country" className="mb-1 text-sm">Country</label>
                                    <select
                                        id="country"
                                        className="w-full md:w-auto text-sm rounded-md border  border-gray-300 focus:outline-none focus:border-indigo-500"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option value="">All Country</option>
                                        <option value="ae">United Arab Emirates</option>
                                        <option value="ar">Saudi Arabia</option>
                                        <option value="at">Austria</option>
                                        <option value="au">Australia</option>
                                        <option value="be">Belgium</option>
                                        <option value="bg">Bulgaria</option>
                                        <option value="br">Brazil</option>
                                        <option value="ca">Canada</option>
                                        <option value="ch">Switzerland</option>
                                        <option value="cn">China</option>
                                        <option value="co">Colombia</option>
                                        <option value="cz">Czech Republic</option>
                                        <option value="de">Germany</option>
                                        <option value="eg">Egypt</option>
                                        <option value="fr">France</option>
                                        <option value="gb">United Kingdom</option>
                                        <option value="gr">Greece</option>
                                        <option value="hk">Hong Kong</option>
                                        <option value="hu">Hungary</option>
                                        <option value="id">Indonesia</option>
                                        <option value="ie">Ireland</option>
                                        <option value="il">Israel</option>
                                        <option value="in">India</option>
                                        <option value="it">Italy</option>
                                        <option value="jp">Japan</option>
                                        <option value="kr">South Korea</option>
                                        <option value="lt">Lithuania</option>
                                        <option value="lv">Latvia</option>
                                        <option value="ma">Morocco</option>
                                        <option value="mx">Mexico</option>
                                        <option value="my">Malaysia</option>
                                        <option value="ng">Nigeria</option>
                                        <option value="nl">Netherlands</option>
                                        <option value="no">Norway</option>
                                        <option value="nz">New Zealand</option>
                                        <option value="ph">Philippines</option>
                                        <option value="pl">Poland</option>
                                        <option value="pt">Portugal</option>
                                        <option value="ro">Romania</option>
                                        <option value="rs">Serbia</option>
                                        <option value="ru">Russia</option>
                                        <option value="sa">South Africa</option>
                                        <option value="se">Sweden</option>
                                        <option value="sg">Singapore</option>
                                        <option value="sk">Slovakia</option>
                                        <option value="th">Thailand</option>
                                        <option value="tr">Turkey</option>
                                        <option value="tw">Taiwan</option>
                                        <option value="ua">Ukraine</option>
                                        <option value="us">United States</option>
                                        <option value="ve">Venezuela</option>
                                        <option value="za">South Africa</option>
                                    </select>
                                </div>
                            </div>
                        </AdvancedSearch >
                    </div>
                </div>
            </div>
            <div className='flex-row'>
                <SourceDisplay sources={sources} />
            </div>
        </>
    );
}

export default SourceUrlGenerator;
