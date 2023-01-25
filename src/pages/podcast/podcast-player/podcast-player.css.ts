import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const title = style({
  fontSize: vars.size[200],
  fontWeight: 'bold',
  marginBottom: vars.size[100],
});

const description = style({
  fontStyle: 'italic',
  fontSize: vars.size[125],
  color: vars.color.gray600,
  marginBottom: vars.spacing[200],
});

export const styles = { title, description };
