import { keyframes, styled } from '../../styles';

const dash = keyframes({
  '0%': {
    'stroke-dasharray': '0, 150',
    'stroke-dashoffset': 0,
  },
  '50%': {
    'stroke-dasharray': '100, 150',
    'stroke-dashoffset': -24,
  },
  '100%': {
    'stroke-dasharray': '0, 150',
    'stroke-dashoffset': -124,
  },
});

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const colors = keyframes({
  '0%, 100%': {
    stroke: '$surface-interactive-default',
  },
  '35%': {
    stroke: '$surface-success-default',
  },
  '75%': {
    stroke: '$surface-danger-default',
  },
});

export const Container = styled('svg', {
  animation: `${rotate} 2.625s linear infinite`,

  '& circle': {
    animation: `${dash} 1.4s ease-in-out infinite, ${colors} 2.5s ease-in-out 0.75s infinite`,
    stroke: '$surface-danger-default',
    'stroke-linecap': 'round',
  },

  variants: {
    size: {
      xs: {
        width: '$3',
        height: '$3',
      },
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$8',
        height: '$8',
      },
    },
  },
});
