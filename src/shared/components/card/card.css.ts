import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

export const card = style({
  display: 'block',
  backgroundColor: vars.color.white,
  boxShadow: vars.shadow.primary,
  borderRadius: vars.shape.rounded,
  padding: vars.spacing[200],
});

export const styles = { card };
