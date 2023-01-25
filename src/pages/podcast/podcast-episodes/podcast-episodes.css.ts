import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const link = style({
  color: vars.color.brand,
});

const spacer = style({
  marginTop: vars.spacing[200],
});

const episodes = style({
  fontSize: vars.size[200],
  fontWeight: 'bold',
});

export const styles = { link, spacer, episodes };
