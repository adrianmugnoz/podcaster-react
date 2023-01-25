import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const table = style({
  width: '100%',
  maxWidth: '100%',
  marginBottom: vars.spacing[100],
  backgroundColor: 'transparent',
  borderCollapse: 'collapse',
  boxSizing: 'border-box',
});

const trBody = style({
  selectors: {
    '&:nth-of-type(odd)': {
      backgroundColor: vars.color.gray100,
    },
  },
});

const th = style({
  verticalAlign: 'bottom',
  borderBottom: `2px solid ${vars.color.gray200}`,
  padding: vars.spacing[100],
  textAlign: 'left',
});

const td = style({ borderTop: `1px solid ${vars.color.gray200}`, padding: vars.spacing[100] });

export const styles = { table, trBody, th, td };
