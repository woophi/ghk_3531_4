import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const grid = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
});
const gridItem = style({
  backgroundColor: '#F2F3F5',
  padding: '1rem',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '160px',
  textDecoration: 'none',
  color: 'inherit',
});

const containerBS = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  grid,
  gridItem,
  containerBS,
};
