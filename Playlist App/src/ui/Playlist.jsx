import { useState } from 'react';
import Song from './Song';
import '../css/Playlist.css'
import SaveToSpotify from '../utils/SaveToSpotify.jsx';

export default function Playlist({ playlist, handleRemove }) {
    const [ playlistName, setPlaylistName ] = useState('');

    function handleChange({ target }) {
        setPlaylistName(target.value);
    }
    
    return (
        <div className='playlist'>
            <input id='playlistTitle' type='text' value={playlistName} onChange={handleChange} placeholder='Your Playlist Name' ></input>
            {playlist.map((item, index) => 
                <Song key={index} item={item} searchResult={false} handleRemove={handleRemove} />
            )}
        <SaveToSpotify playlist={playlist} />
        </div>
    )
}