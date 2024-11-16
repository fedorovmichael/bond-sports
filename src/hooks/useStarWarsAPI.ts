import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarWarsAPI = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacters = async (page: number) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      const updatedCharacters = await Promise.all(
        data.results.map(async (char: any) => {
          const homeworldRes = await axios.get(char.homeworld);
          return {
            ...char,
            id: `${char.name}-${Math.random()}`,
            imageUrl: `https://picsum.photos/seed/${char.name}/300/150`,
            homeworldDetails: homeworldRes.data,
          };
        })
      );
      setCharacters(updatedCharacters);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  return { characters, fetchCharacters, loading };
};
