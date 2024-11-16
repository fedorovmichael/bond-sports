import { SxProps, Theme } from '@mui/material';



export const loadingContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

export const loadingMessage: SxProps<Theme> = {
  marginTop: 2,
};

export const mainBox: SxProps<Theme> = {
  display: 'flex', 
  height: '100vh'
};

export const mainGrid: SxProps<Theme> = {
  width: '100%'
};

export const dialogBtn: SxProps<Theme> = {
  marginTop: 2
};

export const cardContainer: SxProps<Theme> = {
  maxWidth: 345, 
  margin: '1rem', 
  cursor: 'pointer'
};


