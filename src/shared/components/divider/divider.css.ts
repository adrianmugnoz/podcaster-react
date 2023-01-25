import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const divider = style({
  borderBottom: `1px solid ${vars.color.gray200}`,
  margin: `${vars.spacing[200]} 0`,
});

export const styles = { divider };
