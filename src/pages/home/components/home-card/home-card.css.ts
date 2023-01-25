import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const homeCard = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  textDecoration: 'none',
});

const img = style({
  borderRadius: '100%',
  width: '100px',
});

const image = style({
  marginTop: '-50px',
});

const title = style({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: vars.size[130],
  color: 'black',
});

const author = style({
  color: 'gray',
  fontSize: vars.size[130],
  marginTop: vars.spacing[75],
});

const card = style({
  marginTop: '50px',
  marginBottom: '50px',
});

export const styles = { homeCard, image, img, title, author, card };
