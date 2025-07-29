import React, { useState } from 'react';

export default function SearchBar() {
    const [songSearch, setSongSearch] = useState('');

    function handleChange({ target }:any) {
        setSongSearch(target.value);
    }

    return (
        <>
            <form>
                <input type='text' value={songSearch} onChange={handleChange} ></input>
                <button type='submit'>Search</button>
            </form>
        </>
    );
}