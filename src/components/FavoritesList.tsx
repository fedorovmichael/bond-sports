import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

interface Props {
  favorites: Character[];
  onRemoveFavorite: (id: string) => void;
}

const FavoritesList: React.FC<Props> = ({ favorites, onRemoveFavorite }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Favorites
      </Typography>
      <List>
        {favorites.map((char) => (
          <ListItem key={char.id}>
            <ListItemAvatar>
              <Avatar src={char.imageUrl} alt={char.name} />
            </ListItemAvatar>
            <ListItemText primary={char.name} />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => onRemoveFavorite(char.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FavoritesList;
