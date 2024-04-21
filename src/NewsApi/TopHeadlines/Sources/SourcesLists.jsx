import React, { useState } from 'react';

import SourceUrlGenerator from "./SourceUrlGenerator"

const SourcesLists = () => {
    const [sources, setSources] = useState([]);

    return (
        <>
            <div className="bg-gray-100">
                <div className=' mx-auto p-4'>
                    <div className=" p-4">
                        <h2 className="text-3xl font-bold">Sources</h2>
                    </div>
                    <div className=''>
                        <SourceUrlGenerator sources={sources} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SourcesLists;
