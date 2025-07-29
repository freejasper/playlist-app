import { useState } from 'react';
import './App.css';
import SearchBar from './ui/SearchBar';

function App() {

  return (
    <>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  )
}

export default App
