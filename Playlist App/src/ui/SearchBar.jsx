import React, { useState } from 'react';

export default function SearchBar({ setSearchResults }) {
    const [songSearch, setSongSearch] = useState('');
    function handleChange({ target }) {
        setSongSearch(target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        //searchlogic
    }

    return (
        <>
            <form className='searchBar' onSubmit={handleSubmit} >
                <input type='text' value={songSearch} onChange={handleChange} ></input>
                <button type='submit'>Search</button>
            </form>
        </>
    );
}