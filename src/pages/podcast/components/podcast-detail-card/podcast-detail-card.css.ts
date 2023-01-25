import { style } from '@vanilla-extract/css';
import { vars } from 'core/theme';

const centered = style({
  display: 'flex',
  justifyContent: 'center',
});

const img = style({ borderRadius: vars.shape.rounded });

const title = style({
  fontWeight: 'bold',
});

const secondaryText = style({
  fontStyle: 'italic',
  fontSize: vars.size[125],
});

const descriptionLabel = style({
  fontSize: vars.size[125],
  marginBottom: vars.spacing[100],
  fontWeight: 'bold',
});

const description = style({
  color: vars.color.gray600,
});

export const styles = { img, centered, secondaryText, title, description, descriptionLabel };
