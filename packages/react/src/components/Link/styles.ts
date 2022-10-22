import { styled } from '../../styles';


export const Anchor = styled('a', {
  fontFamily: '$sans',
  fontWeight: '$medium',

  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  position: 'relative',
  whiteSpace: 'nowrap',
  px: '$1',

  '&:hover': {
    outline: 'none',

    '&::before': {
      transform: 'translate3d(0, 2px, 0) scale3d(1.05, 2, 1)',
      clipPath:
        'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
    },

    '& span': {
      transform: 'translate3d(0, -2px, 0)',
    },
  },

  '&:focus': {
    outline: 'none',
    background: 'transparent',
  },

  '&:focus-visible': {
    outline: '1px dashed',
    outlineOffset: '3px',
    outlineColor: '$surface-interactive-disabled',
    background: 'transparent',
    borderRadius: '$sm',
  },

  '&::before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '1px',
    background: 'currentColor',
    top: '100%',
    left: '0',
    pointerEvents: 'none',

    transformOrigin: '50% 100%',
    transition: 'clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
    clipPath:
      'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
  },

  '&::after': {
    position: 'absolute',
    width: '100%',
    height: '1px',
    background: 'currentColor',
    top: '100%',
    left: '0',
    pointerEvents: 'none',
  },

  '& span': {
    d: 'inline-block',
    transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
  },

  variants: {
    color: {
      primary: {
        color: '$text-body',
        '&:active': {
          color: '$surface-action-primary-pressed',
        },
      },
      secondary: {
        color: '$surface-interactive-default',
        '&:active': {
          color: '$surface-interactive-pressed',
        },
      },
      caption: {
        color: '$text-subtext',
        '&:active': {
          color: '$text-body',
        },
      },
    },
  },

  defaultVariants: {
    color: 'primary',
  },
});

