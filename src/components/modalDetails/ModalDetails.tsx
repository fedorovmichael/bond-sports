import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@mui/material';
import styles from './ModalDetails.module.css'
import {dialogBtn} from '../../styles'

interface Props {
  isOpen: boolean;
  character: Character | null;
  onClose: () => void;
}

const ModalDetails: React.FC<Props> = ({ isOpen, character, onClose }) => {
  if (!character) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent>
        <img src={character.imageUrl} alt={character.name} className={styles.imageModal} />
        <Typography>Height: {character.height}m</Typography>
        <Typography>Mass: {character.mass}kg</Typography>
        <Typography>Birth Year: {character.birth_year}</Typography>
        <Typography>Films: {character.films.length}</Typography>
        <Typography>Homeworld: {character.homeworldDetails.name}</Typography>
        <Typography>Terrain: {character.homeworldDetails.terrain}</Typography>
        <Typography>Climate: {character.homeworldDetails.climate}</Typography>
        <Typography>Population: {character.homeworldDetails.population}</Typography>
        <Button variant="contained" color="primary" onClick={onClose} sx={dialogBtn}>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDetails;
