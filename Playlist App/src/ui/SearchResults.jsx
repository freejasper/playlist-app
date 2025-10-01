import Song from './Song';
import HandleQuery from '../utils/HandleQuery';

export default function SearchResults({ 
    SearchSongs, 
    setSearchResults, 
    searchQuery, 
    searchOffset, 
    setSearchOffset, 
    searchResults, 
    handleAdd 
    }) {
    const handleNext = async () => {
        setSearchOffset(searchOffset + 10);
        const result = await HandleQuery(searchQuery, searchOffset, SearchSongs);
        setSearchResults(result);

        document.querySelector('body').scrollTo(0,0);
    }

    const handlePrev = async () => {
        if (searchOffset >= 10) {
            setSearchOffset(searchOffset - 10);
            const result = await HandleQuery(searchQuery, searchOffset, SearchSongs);
            setSearchResults(result);

            document.querySelector('body').scrollTo(0,0);
        }
    }

    return (
        <>
            <div className='returnedSongs'>
                <h1 className='resultsH1'>Results</h1>
                {searchResults.map((item, index) => 
                    <Song key={index} item={item} searchResult={true} handleAdd={handleAdd} />
                )}
                <div className='pagination' >
                    <div className={searchResults.length > 0 && searchOffset >= 10 ? 'prevButton show' : 'prevButton hide'} onClick={handlePrev} >{'<'}</div>
                    <div className={searchResults.length > 0 ? 'nextButton show' : 'nextButton hide'} onClick={handleNext} >{'>'}</div>
                </div>
            </div>
        </>
    );
}