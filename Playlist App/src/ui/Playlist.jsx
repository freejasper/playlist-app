import { use, useState } from 'react';
import Song from './Song';
import SaveToSpotify from './SaveToSpotify.jsx';

export default function Playlist({ playlist, setPlaylist, handleRemove }) {
    const [ playlistName, setPlaylistName ] = useState('');
    const [ description, setDescription ] = useState('New playlist created using Spotify Playlist Maker');

    function handleChangeName({ target }) {
        setPlaylistName(target.value);
    }

    function handleChangeDescription({ target }) {
        setDescription(target.value);
    }
    
    return (
        <div className='playlist'>
            <div className='playlistHeader'>
                <input 
                    id='playlistTitle' 
                    type='text' 
                    value={playlistName} 
                    onChange={handleChangeName} 
                    placeholder='Your Playlist Name' >    
                </input>
                <input 
                    id='playlistDescription' 
                    type='text' 
                    value={description} 
                    onChange={handleChangeDescription} 
                    placeholder='Your Playlist Description' >    
                </input>
            </div>
            <SaveToSpotify 
                playlist={playlist} 
                setPlaylist={setPlaylist} 
                playlistName={playlistName}
                setPlaylistName={setPlaylistName} 
                description={description}
                setDescription={setDescription} />
            {playlist.map((item, index) => 
                <Song key={index} item={item} searchResult={false} handleRemove={handleRemove} />
            )}
        </div>
    )
}