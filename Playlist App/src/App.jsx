import { useState, useEffect } from 'react';
import './App.css';
import Authenticate from './utils/PKCEauth';
import getToken from './utils/PKCEresponse';
import SearchBar from './ui/SearchBar';
import './utils/SearchSongs';
import SearchSongs from './utils/SearchSongs';
import SearchResults from './ui/SearchResults';
import Playlist from './ui/Playlist';

const clientId = 'a0bed56edb4b48dfb1bb00d490fc1e98';
const redirectUri = 'http://127.0.0.1:5173/';

const mockData = [
  { id: 1, songname: "Midnight Echoes", artist: "The Night Owls", album: "Nocturnal Tides", uri: "spotify:track:001" },
  { id: 2, songname: "Sunset Boulevard", artist: "Neon Drive", album: "Evening Overdrive", uri: "spotify:track:002" },
  { id: 3, songname: "Electric Horizon", artist: "Pulsewave", album: "Voltage Voyage", uri: "spotify:track:003" },
  { id: 4, songname: "Velvet Skies", artist: "Luna Vibes", album: "Celestial Threads", uri: "spotify:track:004" },
  { id: 5, songname: "City Lights", artist: "Skyline Groove", album: "Urban Pulse", uri: "spotify:track:005" },
  { id: 6, songname: "Ocean Breeze", artist: "Seaside Dreams", album: "Coastal Rhythms", uri: "spotify:track:006" },
  { id: 7, songname: "Silver Lining", artist: "The Cloudcatchers", album: "Weather Patterns", uri: "spotify:track:007" },
  { id: 8, songname: "Crystal Heart", artist: "Echo Chamber", album: "Fractured Reflections", uri: "spotify:track:008" },
  { id: 9, songname: "Golden Hour", artist: "Sunset Riders", album: "Dusk Anthem", uri: "spotify:track:009" },
  { id: 10, songname: "Neon Nights", artist: "Electric Pulse", album: "Glowing Circuits", uri: "spotify:track:010" },
  { id: 11, songname: "Starlit Path", artist: "Cosmic Drift", album: "Gravity Echoes", uri: "spotify:track:011" },
  { id: 12, songname: "Whispering Winds", artist: "The Breeze Makers", album: "Wind Songs", uri: "spotify:track:012" },
  { id: 13, songname: "Moonlit Dance", artist: "Lunar Shadows", album: "Darklight Waltz", uri: "spotify:track:013" },
  { id: 14, songname: "Firefly Glow", artist: "Twilight Tales", album: "Bioluminescence", uri: "spotify:track:014" },
  { id: 15, songname: "Echoes of Time", artist: "Timeless", album: "Clockwork Dreams", uri: "spotify:track:015" },
  { id: 16, songname: "Radiant Waves", artist: "Solar Flare", album: "Heat Signatures", uri: "spotify:track:016" },
  { id: 17, songname: "Silent Thunder", artist: "Storm Chasers", album: "Skybreaker", uri: "spotify:track:017" },
  { id: 18, songname: "Golden Dreams", artist: "Daybreak", album: "Morning Mirage", uri: "spotify:track:018" },
  { id: 19, songname: "Mystic River", artist: "Shadow Creek", album: "Hidden Currents", uri: "spotify:track:019" },
  { id: 20, songname: "Crystal Tide", artist: "Oceanic Pulse", album: "Aquasonic", uri: "spotify:track:020" }
];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function handleAdd(song) {
    setPlaylist((prev) => [...prev, song]);
  }

  function handleRemove(song) {
    setPlaylist(playlist.filter((item) => item.id != song.id));
  }

  function handleSave() {
    let songURIs = [];
    playlist.forEach((song) => {
      songURIs.push(song.uri);
    });
    //Do something with the uri array
  }

  //login stuff
  const [accessToken, setAccessToken ] = useState('')

  function auth() {
    Authenticate(clientId, redirectUri);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    if(code) {
      //console.log(code);
      getToken(code, clientId, redirectUri);
      setAccessToken(localStorage.getItem('access_token'));
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  //show more songs in search

  return (
    <>
      {accessToken ? null : <button onClick={auth} >Login</button>}
      <SearchBar SearchSongs={SearchSongs} setSearchResults={setSearchResults} accessToken={accessToken} />
      <SearchResults searchResults={searchResults} handleAdd={handleAdd} />
      <Playlist playlist={playlist} handleRemove={handleRemove} handleSave={handleSave} />

    </>
  )
}

export default App
