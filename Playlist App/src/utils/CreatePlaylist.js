import GetUserId from "./GetUserId";

export default async function CreatePlaylist(playlistName, description) {
    const user = await GetUserId();
    const userId = user.id;

    console.log(userId);
    if (!userId) throw new Error('User ID not found');

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

    console.log(endpoint, options);

    try {
        const response = await fetch(endpoint, options);
        if(response.ok) {
            const newPlaylist = await response.json();
            return newPlaylist;
        }
        const errorText = await response.text();
        console.log(errorText);
        throw new Error('Error creating playlist.');
    } catch(error) {
        console.log(error, error.message);
    }
}

