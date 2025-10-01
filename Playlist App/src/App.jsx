import { useState, useEffect } from 'react';
import './App.css';
import Authenticate from './utils/PKCEauth';
import getToken from './utils/PKCEresponse';
import SearchBar from './ui/SearchBar';
import SearchSongs from './utils/SearchSongs';
import SearchResults from './ui/SearchResults';
import Playlist from './ui/Playlist';
import CreatePlaylist from './utils/CreatePlaylist';

const clientId = 'a0bed56edb4b48dfb1bb00d490fc1e98';
const redirectUri = 'http://127.0.0.1:5173/';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [searchOffset, setSearchOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  function handleAdd(song) {
    setPlaylist((prev) => [...prev, song]);
  }

  function handleRemove(song) {
    setPlaylist(playlist.filter((item) => item.id != song.id));
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
      getToken(code, clientId, redirectUri);
      setAccessToken(localStorage.getItem('access_token'));
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <>
      <h1 className='siteTitle'>SPOTIFY PLAYLIST MAKER</h1>
      {accessToken ? null : <button className='loginButton' onClick={auth} >LOGIN</button>}
      {accessToken && <SearchBar 
        SearchSongs={SearchSongs}  
        setSearchResults={setSearchResults}
        setSearchQuery={setSearchQuery}
        setSearchOffset={setSearchOffset} 
      />}
      {accessToken && <SearchResults 
        SearchSongs={SearchSongs}
        setSearchResults={setSearchResults}
        searchQuery={searchQuery}
        searchOffset={searchOffset}
        setSearchOffset={setSearchOffset}
        searchResults={searchResults} 
        handleAdd={handleAdd}
        
      />}
      {accessToken && <Playlist 
        playlist={playlist}
        setPlaylist={setPlaylist} 
        handleRemove={handleRemove} 
      />}
    </>
  )
}

export default App
