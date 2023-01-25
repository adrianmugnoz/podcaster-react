import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const home = style({
  color: vars.color.brand,
});

export const styles = { home };
