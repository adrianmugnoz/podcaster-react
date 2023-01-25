import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const toolbar = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'center',
  marginBottom: vars.spacing[200],
});

const badge = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: vars.spacing[100],
});

export const styles = { toolbar, badge };
