import { style, keyframes } from '@vanilla-extract/css';

const pulse = keyframes({
  '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(51, 122, 183, 0.7)' },
  '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(51, 122, 183, 0)' },
  '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(51, 122, 183, 0)' },
});

const loadingIndicator = style({
  background: 'rgba(51, 122, 183, 1)',
  borderRadius: '50%',
  boxShadow: '0 0 0 0 rgba(51, 122, 183, 1)',
  height: '20px',
  width: '20px',
  transform: 'scale(1)',
  animation: `${pulse} 1.5s infinite`,
});

export const styles = { loadingIndicator };
