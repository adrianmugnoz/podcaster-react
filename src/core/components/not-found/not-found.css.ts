import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const notFound = style({
  padding: vars.size[200],
  margin: 'auto',
  color: vars.color.brand,
});

export const styles = { notFound };
