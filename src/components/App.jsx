import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrowseCharacters from './BrowseCharacters';
import CharacterDetails from './CharacterDetails';
import Home from './Home';
import Comics from './Comics';
import NotFound from './NotFound';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-characters" element={<BrowseCharacters />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;