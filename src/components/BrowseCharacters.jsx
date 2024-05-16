import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';

const publicKey = '6d19a60a9531e9519dfd7b19136bd29d';
const hash = '37ee12b32dbef6d0656581b9ee461e2f';
const apiUrl = `https://gateway.marvel.com/v1/public/characters`;

function BrowseCharacters() {
  const [characterData, setCharacterData] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleChange = (event) => {
    setCharacterData(event.target.value);
    console.log(characterData)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(apiUrl, {
        params: {
          ts: 1,
          apikey: publicKey,
          hash: hash,
          name: characterData,
        },
      });
      console.log(response.data.data.results)
      setCharacters(response.data.data.results);
    } catch (error) {
      console.error('Error fetching characters data:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h3>Marvel Characters</h3>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={characterData} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <img
                src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                alt={character.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseCharacters;