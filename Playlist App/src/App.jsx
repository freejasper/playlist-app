import { useState } from 'react';
import './App.css';
import SearchBar from './ui/SearchBar';

function App() {

  const [ searchResults, setSearchResults ] = useState(null);

  return (
    <>
      <SearchBar setSearchResults={setSearchResults} />

    </>
  )
}

export default App
