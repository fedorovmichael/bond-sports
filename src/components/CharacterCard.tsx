import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import {cardContainer} from '../styles'

interface Props {
  character: Character;
  onAddToFavorites: (character: Character) => void;
  onOpenModal: (character: Character) => void;
}

const CharacterCard: React.FC<Props> = ({ character, onAddToFavorites, onOpenModal }) => {
  return (
    <Card sx={cardContainer} onClick={() => onOpenModal(character)}>
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/200?random=${character.id}`}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {character.name}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onAddToFavorites(character);
          }}
        >
          Add to Favorites
        </Button>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
