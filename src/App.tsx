import React, { useState, useEffect } from 'react';
import { CssBaseline, Box, Grid2 as Grid, CircularProgress, Typography } from '@mui/material';
import { useStarWarsAPI } from './hooks/useStarWarsAPI';
import SearchableList from './components/SearchableList';
import FavoritesList from './components/FavoritesList';
import ModalDetails from './components/modalDetails/ModalDetails';
import { loadingContainer, loadingMessage, mainBox, mainGrid } from './styles';

const App: React.FC = () => {
  const { characters, fetchCharacters, loading } = useStarWarsAPI();
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetchCharacters(1);
  }, []);

  const addToFavorites = (character: Character) => {
    if (!favorites.some((fav) => fav.id === character.id)) {
      setFavorites([...favorites, character]);
    }
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <CssBaseline>
      <Box sx={mainBox}>
        {loading ? (
          <Box sx={loadingContainer}>
            <CircularProgress color="primary" />
            <Typography variant="body1" sx={loadingMessage}>
              Loading data, please wait...
            </Typography>
          </Box>
        ):(
          <Grid container spacing={1} sx={mainGrid}>
            <Grid size={{ xs: 8 }}>
              <SearchableList
                characters={characters}
                onAddToFavorites={addToFavorites}
                onOpenModal={setSelectedCharacter}
              />
            </Grid>
            <Grid size={{ xs: 4 }}>
              <FavoritesList favorites={favorites} onRemoveFavorite={removeFromFavorites} />
            </Grid>
          </Grid>
        )}
        <ModalDetails
          isOpen={!!selectedCharacter}
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      </Box>
    </CssBaseline>
  );
};

export default App;
