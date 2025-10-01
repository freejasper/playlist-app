export default async function HandleQuery(query, offset, SearchSongs) {
    const results = await SearchSongs(query, offset);
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
    return songResults;
}