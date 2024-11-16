import React, { useState } from 'react';
import { Box, TextField, Grid2 as Grid} from '@mui/material';
import CharacterCard from './CharacterCard';


interface Props {
  characters: Character[];
  onAddToFavorites: (character: Character) => void;
  onOpenModal: (character: Character) => void;
}

const SearchableList: React.FC<Props> = ({ characters, onAddToFavorites, onOpenModal }) => {
  const [search, setSearch] = useState<string>('');

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <TextField
        label="Search Characters"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={1}>
        {filteredCharacters.map((char) => (
          <Grid size={{ xs:12, sm:6, md:4 }} key={char.id}>
            <CharacterCard
              character={char}
              onAddToFavorites={onAddToFavorites}
              onOpenModal={onOpenModal}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchableList;
