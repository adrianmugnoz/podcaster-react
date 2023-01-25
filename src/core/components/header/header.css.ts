import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const header = style({
  padding: vars.size[200],
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
});

const content = style({
  maxWidth: vars.content.maxWidth,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const headerTitle = style({
  fontSize: vars.size[200],
  fontWeight: 'bold',
  color: vars.color.brand,
});

export const styles = { header, headerTitle, content };
