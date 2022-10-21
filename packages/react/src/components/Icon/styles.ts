import { styled } from '../../styles';

export const SVG = styled('svg', {
  fill: 'currentColor',

  variants: {
    color: {
      body: {
        color: '$text-body',
      },
      subtext: {
        color: '$text-subtext',
      },
      caption: {
        color: '$text-caption',
      },
      danger: {
        color: '$text-danger',
      },
      success: {
        color: '$text-success',
      },
      warning: {
        color: '$text-warning',
      },
      'on-interactive': {
        color: '$text-on-interactive',
      },
      inverted: {
        color: '$text-inverted',
      },
      current: {
        color: 'currentColor',
      },
    },

    size: {
      sm: {
        width: '$3',
      },
      md: {
        width: '$4',
      },
      lg: {
        width: '$5',
      },
    },
  },
});
