import CreatePlaylist from './CreatePlaylist';
import AddSongs from './AddSongs';

export default async function SavePlaylist(playlist, playlistName, description) {
    //Create array of song URIs
    let songURIs = [];
    playlist.forEach((song) => {
      songURIs.push(song.uri);
    });
    
    try {
      //Create new playlist
      const newPlaylist = await CreatePlaylist(playlistName, description);
      console.log(newPlaylist);
      if (!newPlaylist) throw new Error('Playlist URI not returned from CreatePlaylist');

      //Add songs to playlist
      const addSongsResult = await AddSongs(newPlaylist.id, songURIs);
      if (!addSongsResult) throw new Error('Error adding songs to playlist');

      return {ok: true, message: 'Playlist created successfully!'};
    } catch(err) {
      console.log(err, err.message);
    }
}