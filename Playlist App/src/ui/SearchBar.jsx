import React, { useState } from 'react';

export default function SearchBar({ SearchSongs, setSearchResults }) {
    const [songSearch, setSongSearch] = useState('');
    function handleChange({ target }) {
        setSongSearch(target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        //searchlogic
        const results = await SearchSongs(songSearch);
        console.log(results);
        let songResults = [];
        if (results && Array.isArray(results.tracks.items)) {
            results.tracks.items.forEach((item) => {
            // Extract artist names
            const artist = item.artists.map(artist => artist.name).join(', ');
            const songObject = {
                songname: item.name,
                artist,
                album: item.album.name,
                artwork: item.album.images[2].url,
                id: item.id
            }
            songResults.push(songObject);
            })
        }
        setSearchResults(songResults);
        setSongSearch('');
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

