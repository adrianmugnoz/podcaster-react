import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const input = style({
  padding: vars.spacing[100],
  borderRadius: vars.shape.rounded,
  border: `1px solid ${vars.color.gray300}`,
  ':focus': {
    borderColor: vars.color.gray600,
    outline: 'none',
  },
});

export const styles = { input };
