import { style } from '@vanilla-extract/css';

export const grid = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  width: 'calc(100% + 16px)',
  marginLeft: '-16px',
});

export const styles = { grid };
