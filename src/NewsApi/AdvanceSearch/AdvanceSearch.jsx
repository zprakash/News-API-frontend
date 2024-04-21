import React, { useState, useEffect, useRef } from 'react';

const AdvancedSearch = ({ children }) => {
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
    const advancedSearchRef = useRef(null);

    const toggleAdvancedSearch = () => {
        setShowAdvancedSearch(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (advancedSearchRef.current && !advancedSearchRef.current.contains(event.target)) {
                setShowAdvancedSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='z-50'>
            <div className="relative " ref={advancedSearchRef}>
                <button onClick={toggleAdvancedSearch} className="flex text-gray-800 text-lg font-semibold rounded-lg">Advanced Search
                    <svg xmlns="http://www.w3.org/2000/svg" className="my-auto h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.758l3.879-3.879a1 1 0 0 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                {showAdvancedSearch && (
                    <div className="absolute left-0 mt-2 w-full flex justify-center">
                        <div className="bg-white shadow-lg rounded-lg p-7">
                            <div className="flex flex-col justify-center items-center ">
                                {children}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdvancedSearch;
