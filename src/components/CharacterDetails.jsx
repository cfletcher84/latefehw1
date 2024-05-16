import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';

const publicKey = '6d19a60a9531e9519dfd7b19136bd29d';
const hash = '37ee12b32dbef6d0656581b9ee461e2f';
const apiUrl = `https://gateway.marvel.com/v1/public/characters`;

function CharacterDetails() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterResponse = await axios.get(`${apiUrl}/${characterId}`, {
          params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
          },
        });
        const comicResponse = await axios.get(`${apiUrl}/${characterId}/comics`, {
          params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
          },
        });

        setCharacter(characterResponse.data.data.results[0]);
        setComics(comicResponse.data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    fetchData();
  }, [characterId]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <h2>{character.name}</h2>
      {character.description && <p>{character.description}</p>}
      {character.thumbnail && (
        <img
          src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
          alt={character.name}
        />
      )}
      <h3>Comics</h3>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetails;