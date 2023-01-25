import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const page = style({
  paddingTop: vars.spacing[200],
  maxWidth: vars.content.maxWidth,
  margin: 'auto',
});

export const styles = { page };
