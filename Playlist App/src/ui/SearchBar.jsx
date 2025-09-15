import React, { useState } from 'react';

export default function SearchBar({ SearchSongs, setSearchResults }) {
    const [songSearch, setSongSearch] = useState('');
    function handleChange({ target }) {
        setSongSearch(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //searchlogic
        const results = SearchSongs(songSearch);
    }

    return (
        <>
            <form className='searchBar' name='searchBar' onSubmit={handleSubmit} >
                <input type='text' value={songSearch} onChange={handleChange} ></input>
                <button type='submit'>Search</button>
            </form>
        </>
    );
}