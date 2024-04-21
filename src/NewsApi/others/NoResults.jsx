import React from 'react';

const NoResults = () => {
    return (
        <div className=' flex items-center justify-center relative h-screen '>
        <div className="absolute top-30 ">
            <h1 className="text-4xl font-bold mb-4">No Results Found</h1>
            <p className="text-lg mb-4">Your search  did not match any articles.</p>
            <p className="text-lg mb-4">Please check your spelling or try a different search term.</p>
        </div>
        </div>
    );
};

export default NoResults;