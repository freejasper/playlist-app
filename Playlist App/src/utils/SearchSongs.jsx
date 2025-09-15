export default async function SearchSongs(query, offset) {
    const endpoint = 'https://api.spotify.com/v1/search';

    let searchOffset = '&offset=0';
    if(offset) {
        searchOffset = `&offset=${offset}`;
    }
    
    const urlParams = `?q=${encodeURIComponent(query)}&type=track&market=AU&limit20${searchOffset}`;
    const urlToFetch = `${endpoint}${urlParams}`;
    const options = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    };

    try {
        const response = await fetch(urlToFetch, options);
        if(response.ok) {
            const searchData = await response.json();
            return searchData;
        }
        throw new Error('Song search error.');
    } catch(error) {
        console.log(error);
    }
}

