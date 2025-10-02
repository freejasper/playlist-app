import SavePlaylist from '../utils/SavePlaylist.js';

export default function SaveToSpotify({ playlist, setPlaylist, playlistName, setPlaylistName, description, setDescription }) {
    
    async function handleSave() {
        try {
            if (playlist.length > 0 && playlistName.length > 0) {
                const result = await SavePlaylist(playlist, playlistName, description);
                if (result.ok) {
                    setPlaylist([]);
                    setPlaylistName('');
                    setDescription('New playlist created using Spotify Playlist Maker');
                    alert(result.message);
                    return;
                }
                throw new Error('Error saving playlist.');
            }
            if (playlist.length === 0) {
                alert('You must have at least one song in your playlist before saving.');
                throw new Error('Playlist is empty.');
            }
            if (playlistName.length === 0) {
                alert('You must name your playlist before saving.');
                throw new Error('Playlist has no name.');
            }

            throw new Error('Unexpected behaviour in handleSave function.');
        } catch(err) {
            console.log(err, err.message);
        }
    }

    return <button onClick={handleSave} >SAVE TO SPOTIFY</button>
}