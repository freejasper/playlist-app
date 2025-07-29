import Song from './Song';
import '../css/searchResults.css'

export default function SearchResults({ searchResults, handleAdd }) {
    
    return (
        <>
            <div className='returnedSongs'>
                <h1 className='resultsh1'>Results</h1>
                {searchResults.map((item, index) => 
                    <Song key={index} item={item} searchResult={true} handleAdd={handleAdd} />
                )}
            </div>
        </>
    );
}