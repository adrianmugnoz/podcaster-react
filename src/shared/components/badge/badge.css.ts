import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const badge = style({
  background: vars.color.brand,
  padding: `${vars.size[25]} ${vars.size[65]}`,
  color: 'white',
  borderRadius: vars.shape.rounded,
  display: 'inline',
});

export const styles = { badge };
