import SavePlaylist from '../utils/SavePlaylist.js';

export default function SaveToSpotify({ playlist, setPlaylist, playlistName }) {
    
    async function handleSave() {
        try {
            if (playlist.length > 0 || playlistName.length > 0) {
                const result = await SavePlaylist(playlist, playlistName);
                if (result.ok) {
                    setPlaylist([]);
                    alert(result.message);
                    return;
                }
                throw new Error('Error saving playlist.');
            }
            throw new Error('Playlist is empty or has no name.');
        } catch(err) {
            console.log(err, err.message);
        }
    }

    return <button onClick={handleSave} >SAVE TO SPOTIFY</button>
}