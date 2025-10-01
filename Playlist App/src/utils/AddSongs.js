export default async function AddSongs(playlistId, songURIs) {
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uris: songURIs,
            position: 0
        })
    }
    try {
        const response = await fetch(endpoint, options);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Error adding songs to playlist.');
    } catch(err) {
        console.log(err, err.message);
    }
}