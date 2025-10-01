import React, { useState } from 'react';
import HandleQuery from '../utils/HandleQuery';

export default function SearchBar({ 
    SearchSongs, 
    setSearchResults, 
    setSearchQuery,
    setSearchOffset 
    }) {
    const [songSearch, setSongSearch] = useState('');
    function handleChange({ target }) {
        setSongSearch(target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setSearchOffset(0);
        setSearchQuery(songSearch);
        const songResults = await HandleQuery(songSearch, 0, SearchSongs);
        setSearchResults(songResults);
        setSongSearch('');
    }

    return (
        <>
            <form className='searchBar' name='searchBar' onSubmit={handleSubmit} >
                <input type='text' value={songSearch} onChange={handleChange} ></input>
                <button type='submit'>SEARCH</button>
            </form>
        </>
    );
}

