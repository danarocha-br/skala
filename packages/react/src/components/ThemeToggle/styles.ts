import { styled } from '../../styles';

export const Button = styled('button', {
  all: 'unset',

  position: 'relative',
  cursor: 'pointer',
  borderRadius: '$sm',
  transform: 'scale(0.8)',
  p: 2,
  transition: 'background .3s linear',

  '&:hover': {
    bg: '$surface-action-transparent-hover',
  },

  '&:focus': {
    outline: '2px solid',
    outlineColor: '$surface-action-transparent-disabled',
    outlineOffset: '2px',
  },

  '& svg': {
    transition: 'all .3s linear',
    margin: '0 auto',
    fill: 'none',

    '& path': {
      stroke: '$text-subtext',
      strokeWidth: 2,
      strokeLinecap: 'round',
      transition: 'all .2s linear',

      '&.light': {
        stroke: '$text-subt',
        strokeDasharray: '3px',
        strokeDashoffset: 0,
      },
    },
  },

  variants: {
    isDark: {
      true: {
        '& svg': {
          transform: 'translateY(-3px)',
        },

        '& path': {
          '&.light': {
            strokeDashoffset: '3px !important',
            opacity: 0,
          },
        },
      },
    },
  },
});
