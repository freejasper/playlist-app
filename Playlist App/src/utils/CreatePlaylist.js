import GetUserId from "./GetUserId";

export default async function CreatePlaylist(playlistName, description) {
    const user = await GetUserId();
    const userId = user.id;

    const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: playlistName,
            description: description,
            public: false
        })
    };

    try {
        const response = await fetch(endpoint, options);
        if(response.ok) {
            const newPlaylist = await response.json();
            return newPlaylist;
        }
        throw new Error('Error creating playlist.');
    } catch(error) {
        console.log(error);
    }
}

