import { useState } from 'react';
import './App.css';
import SearchBar from './ui/SearchBar';
import './utils/routes';
import searchSongs from './utils/routes';
import SearchResults from './ui/SearchResults';
import Playlist from './ui/Playlist';

const mockData = [
  { id: 1, songname: "Midnight Echoes", artist: "The Night Owls", album: "Nocturnal Tides" },
  { id: 2, songname: "Sunset Boulevard", artist: "Neon Drive", album: "Evening Overdrive" },
  { id: 3, songname: "Electric Horizon", artist: "Pulsewave", album: "Voltage Voyage" },
  { id: 4, songname: "Velvet Skies", artist: "Luna Vibes", album: "Celestial Threads" },
  { id: 5, songname: "City Lights", artist: "Skyline Groove", album: "Urban Pulse" },
  { id: 6, songname: "Ocean Breeze", artist: "Seaside Dreams", album: "Coastal Rhythms" },
  { id: 7, songname: "Silver Lining", artist: "The Cloudcatchers", album: "Weather Patterns" },
  { id: 8, songname: "Crystal Heart", artist: "Echo Chamber", album: "Fractured Reflections" },
  { id: 9, songname: "Golden Hour", artist: "Sunset Riders", album: "Dusk Anthem" },
  { id: 10, songname: "Neon Nights", artist: "Electric Pulse", album: "Glowing Circuits" },
  { id: 11, songname: "Starlit Path", artist: "Cosmic Drift", album: "Gravity Echoes" },
  { id: 12, songname: "Whispering Winds", artist: "The Breeze Makers", album: "Wind Songs" },
  { id: 13, songname: "Moonlit Dance", artist: "Lunar Shadows", album: "Darklight Waltz" },
  { id: 14, songname: "Firefly Glow", artist: "Twilight Tales", album: "Bioluminescence" },
  { id: 15, songname: "Echoes of Time", artist: "Timeless", album: "Clockwork Dreams" },
  { id: 16, songname: "Radiant Waves", artist: "Solar Flare", album: "Heat Signatures" },
  { id: 17, songname: "Silent Thunder", artist: "Storm Chasers", album: "Skybreaker" },
  { id: 18, songname: "Golden Dreams", artist: "Daybreak", album: "Morning Mirage" },
  { id: 19, songname: "Mystic River", artist: "Shadow Creek", album: "Hidden Currents" },
  { id: 20, songname: "Crystal Tide", artist: "Oceanic Pulse", album: "Aquasonic" }
];


function App() {

  const [ searchResults, setSearchResults ] = useState(mockData);
  const [ playlist, setPlaylist ] = useState([]);

  function handleAdd(song) {
    setPlaylist((prev) => [...prev, song]);
  }

  function handleRemove(song) {
    setPlaylist(playlist.filter((item) => item.id != song.id));
  }

  return (
    <>
      <SearchBar searchSongs={searchSongs} setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults} handleAdd={handleAdd} />
      <Playlist playlist={playlist} handleRemove={handleRemove} />

    </>
  )
}

export default App
