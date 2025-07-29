import React, { useState } from 'react';

export default function SearchBar({ setSearchResults }) {
    const [songSearch, setSongSearch] = useState('');
    function handleChange({ target }) {
        setSongSearch(target.value);
    }

    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch();
            if(response.ok) {
                const searchData = await response.json();
                setSearchResults(searchData);
            }
            throw new Error('Song search error.');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type='text' value={songSearch} onChange={handleChange} ></input>
                <button type='submit'>Search</button>
            </form>
        </>
    );
}