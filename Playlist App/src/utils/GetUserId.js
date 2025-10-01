export default async function GetUserId() {
    const endpoint = 'https://api.spotify.com/v1/me';
    const options = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }
    try {
        const response = await fetch(endpoint, options);
        if (response.ok) {
            const user = await response.json();
            return user;
        }
        throw new Error('Error fetching user ID.');
    } catch(err) {
        console.error(err, err.message);
    }
}