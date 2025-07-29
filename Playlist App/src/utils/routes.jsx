
export default async function searchSongs() {
    const baseUrl = '';
    const urlParams = '';
    const urlToFetch = '';
    const options = {};

    try {
        const response = await fetch();
        if(response.ok) {
            const searchData = await response.json(`${urlToFetch}`, options);
            return searchData;
        }
        throw new Error('Song search error.');
    } catch(error) {
        console.log(error);
    }
}
