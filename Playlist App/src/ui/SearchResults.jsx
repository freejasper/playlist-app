import Song from './Song';

export default function SearchResults({ searchResults, handleAdd }) {
    
    return (
        <>
            <div className='returnedSongs'>
                <h1 className='resultsH1'>Results</h1>
                {searchResults.map((item, index) => 
                    <Song key={index} item={item} searchResult={true} handleAdd={handleAdd} />
                )}
            </div>
        </>
    );
}