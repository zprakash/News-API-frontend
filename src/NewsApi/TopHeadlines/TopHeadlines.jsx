import TopHeadliensUrlGenerator from "./TopHeadliensUrlGenerator"
import TopHeadliensSearchBox from './TopHeadliensSearchBox';

const TopHeadlines = () => {
    return (
        <>
            <div className="flex justify-center p-4 bg-gray-100">
                <div className="flex justify-between  max-w-screen-lg w-full sm:flex-row">
                    <h2 className="text-2xl font-bold">Top Headlines</h2>
                    <TopHeadliensSearchBox />
                </div>
            </div>
            <TopHeadliensUrlGenerator />
        </>
    );
};

export default TopHeadlines;
