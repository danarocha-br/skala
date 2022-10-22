import { styled, keyframes } from '../../styles';
import { Button as AccessibleButton } from 'reakit/Button';

const MoveScaleUpInitial = keyframes({
  to: { transform: 'translate3d(0,-100%,0) scale3d(1,1.1,1)', opacity: 0 },
});

const MoveScaleUpEnd = keyframes({
  from: {
    transform: 'translate3d(0,50%,0) scale3d(1,1.1,1)',
    opacity: 0,
  },
  to: {
    transform: 'translate3d(0,0,0)',
    opacity: 1,
  },
});

const MoveLoadingGradientStart = keyframes({
  '0%': {
    clipPath:
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) calc(100% - $$borderWidth), $$borderWidth calc(100% - $$borderWidth), $$borderWidth 100%, 100% 100%, 100% 0%, 0% 0%)',
  },
  '25%': {
    clipPath:
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) calc(100% - $$borderWidth), calc(100% - $$borderWidth) calc(100% - $$borderWidth), calc(100% - $$borderWidth) 100%, 100% 100%, 100% 0%, 0% 0%)',
  },
  '50%': {
    clipPath:
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, 100% 0%, 0% 0%)',
  },
  '75%': {
    '-webkit-clip-path':
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth $$borderWidth, $$borderWidth 0%, 0% 0%)',
  },
  '100%': {
    '-webkit-clip-path':
      'polygon(0% 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, $$borderWidth 100%, 0% 100%)',
  },

});

const MoveLoadingGradientEnd = keyframes({
  '0%': { backgroundPosition: '15% 0%' },
  '50%': { backgroundPosition: '50% 0%' },
  '100%': { backgroundPosition: '50% 100%' },
});

export const Container = styled(AccessibleButton, {
  all: 'unset',
  userSelect: 'none',
  boxSizing: 'border-box',
  '-webkit-appearance': 'none',

  fontFamily: '$sans',
  fontWeight: '$medium',
  whiteSpace: 'nowrap',
  // pointerEvents: 'auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'hidden',
  position: 'relative',
  outline: 'none',
  transition: 'all 300ms ease, outline 1ms',

  '&:focus': {
    outline: '2px solid',
    outlineOffset: '2px',
    outlineColor: 'transparent',
  },

  '&:disabled': {
    opacity: '0.75',
    cursor: 'not-allowed !important',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },

  '& svg': {
    zIndex: '$1',
  },

  variants: {
    variant: {
      primary: {
        color: '$text-on-interactive',

        [`.dark-theme &`]: {
          color: '$text-inverted',

          '& svg': {
            fill: '$text-on-interactive',
          },
        },
      },

      transparent: {
        color: '$text-body',
        background: '$surface-action-transparent-default !important',

        '&:hover:not([disabled])': {
          background: '$surface-action-transparent-hover !important',

          [`.dark-theme &`]: {
            background: '$surface-action-transparent-disabled !important',
          },
        },

        '&:disabled': {
          background: '$surface-action-transparent-hover !important',
        },
      },

      icon: {
        color: '$text-body',
        background: '$surface-action-transparent !important',

        '& svg': {
          fill: '$text-body',
        },

        '&:hover:not([disabled])': {
          background: '$surface-action-transparent-hover !important',
        },
      },
    },

    size: {
      lg: {
        fontSize: '$md',
        padding: '$4 $6',
        borderRadius: '$md',
        height: 64,
      },
      md: {
        fontSize: '$md',
        padding: '$3 $5',
        borderRadius: '$md',
      },
      sm: {
        fontSize: '$sm',
        padding: '$1 $4',
        h: 40,
        borderRadius: '$sm',

        '&:focus': {
          outline: '2px solid',
          outlineOffset: '0px',
          outlineColor: 'transparent',
        },
      },
    },

    fullWidth: {
      true: {
        w: '100%',
      },
    },

    color: {
      primary: {
        color: '$surface-action-primary-constrast',
        background: '$surface-action-primary-default',

        '&:hover:not([disabled])': {
          background: '$surface-action-primary-hover',

          '& span': {
            zIndex: '$1',
          },
        },
        '&:focus': {
          outlineColor: '$surface-action-primary-disabled',
        },
        '&:disabled': {
          color: '$text-subtext !important',
          background: '$surface-action-primary-disabled',
        },
      },
      secondary: {
        color: '$surface-interactive-constrast',
        background: '$surface-interactive-default',

        '&:hover:not([disabled])': {
          background: '$surface-interactive-hover',
          '& span': {
            zIndex: '$1',
          },
        },
        '&:focus': {
          outlineColor: '$surface-interactive-disabled',
          background: '$surface-interactive-hover',
        },
        '&:disabled': {
          color: '$surface-interactive-border !important',
          background: '$surface-interactive-disabled',

          [`.dark-theme &`]: {
            color: '$text-on-interactive !important',
            background: '$surface-interactive-disabled',
            opacity: 0.5,
          },
        },
      },
      danger: {
        color: '$surface-danger-constrast',
        background: '$surface-danger-default',

        '&:hover:not([disabled])': {
          background: '$surface-danger-hover',
        },
        '&:focus': {
          outlineColor: '$surface-danger-disabled',
        },
        '&:disabled': {
          color: '$surface-danger-border !important',
          background: '$surface-danger-disabled',

          [`.dark-theme &`]: {
            color: '$surface-danger-contrast !important',
            opacity: 0.5,
          },
        },
      },
    },

    animateOnHover: {
      true: {
        '&:hover:not([disabled])': {
          '&::before': {
            transform: 'translate3d(0,0,0) scale3d(1,1,1)',
            transition: 'transform 0.4s cubic-bezier(0.1, 0, 0.3, 1)',
          },

          '&::after': {
            transform: 'translate3d(0,0,0)',
            transitionDuration: '0.05s',
            transitionDelay: '0.4s',
            transitionTimingFunction: 'linear',
          },

          span: {
            animation: `${MoveScaleUpInitial} 0.3s forwards, ${MoveScaleUpEnd} 0.3s forwards 0.3s`,
          },
        },

        '& span': {
          display: 'block',
          position: 'relative',
          zIndex: '$1',
        },

        '&::before': {
          content: '',
          width: '120%',
          height: '0',
          position: 'absolute',
          paddingBottom: '120%',
          top: '-110%',
          left: '-10%',
          borderRadius: '50%',
          transform: 'translate3d(0,68%,0) scale3d(0,0,0)',
        },

        '&::after': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          w: '100%',
          h: '100%',
          transform: 'translate3d(0,-100%,0)',
          transition: 'transform 0.4s cubic-bezier(0.1, 0, 0.3, 1)',
        },
      },
    },

    loading: {
      true: {
        $$borderWidth: '2.4px',
        $$gradient:
          'linear-gradient(99deg, $colors$neutral200, $colors$royal300, $colors$froly300)',
        position: 'relative',
        background: '$surface-action-transparent-hover !important',

        '&::after': {
          content: '',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: '$md',
          // border: '$$borderWidth solid $neutral200',
          background: '$$gradient',
          backgroundSize: '100% 100%',
          clipPath:
            'polygon(0% 100%, $$borderWidth 100%, $$borderWidth $$borderWidth, calc(100% - $$borderWidth) $$borderWidth, calc(100% - $$borderWidth) calc(100% - $$borderWidth), $$borderWidth calc(100% - $$borderWidth), $$borderWidth 100%, 100% 100%, 100% 0%, 0% 0%)',
          animation: `${MoveLoadingGradientStart} 2s ease-in-out alternate infinite`,
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'icon',
      size: 'lg',

      css: {
        w: '$7',
        h: '$7',
        p: '0 ',
      },
    },
    {
      variant: 'icon',
      size: 'md',

      css: {
        w: '$6 ',
        h: '$6 ',
        p: '0 ',
      },
    },
    {
      variant: 'icon',
      size: 'sm',

      css: {
        w: '28px',
        h: '28px',
        p: '0 ',
      },
    },
    {
      variant: 'icon',
      fullWidth: true,

      css: {
        w: 'initial',
      },
    },
    {
      variant: 'transparent',
      color: 'primary',

      css: {
        color: '$text-body',
        '&:focus': {
          outlineColor: '$surface-action-transparent-disabled',
        },
      },
    },
    {
      variant: 'icon',
      color: 'primary',

      css: {
        '&:focus': {
          outlineColor: '$surface-action-transparent-disabled',
        },
      },
    },
    {
      variant: 'transparent',
      color: 'secondary',

      css: {
        color: '$surface-interactive-default',
        '&:focus': {
          outlineColor: '$surface-interactive-disabled',
        },
      },
    },
    {
      variant: 'transparent',
      color: 'danger',

      css: {
        color: '$surface-danger-default',
        '&:focus': {
          outlineColor: '$surface-danger-disabled',
        },
      },
    },
    {
      variant: 'primary',
      color: 'primary',

      css: {
        '&:disabled': {
          color: '$text-inverted',
        },
        [`.dark-theme &`]: {
          '& svg': {
            fill: '$text-inverted',
          },
        },
      },
    },
    {
      variant: 'primary',
      color: 'secondary',

      css: {
        '&:disabled': {
          color: '$text-inverted',
        },

        [`.dark-theme &`]: {
          color: '$text-on-interactive',
        },
      },
    },
    {
      variant: 'primary',
      color: 'danger',

      css: {
        '&:disabled': {
          color: '$text-inverted',
        },

        [`.dark-theme &`]: {
          color: '$text-on-interactive',
        },
      },
    },
    {
      variant: 'icon',
      color: 'secondary',

      css: {
        color: '$surface-interactive-default',
        '& svg': {
          fill: '$surface-interactive-default',
        },

        '&:focus': {
          outlineColor: '$surface-interactive-disabled',
        },

        [`.dark-theme &`]: {
          color: '$text-inverted',
        },
      },
    },
    {
      variant: 'icon',
      color: 'danger',

      css: {
        color: '$surface-danger-default',
        '& svg': {
          fill: '$surface-danger-default',
        },

        '&:focus': {
          outlineColor: '$surface-danger-disabled',
        },

        [`.dark-theme &`]: {
          color: '$text-inverted',
        },
      },
    },

    {
      color: 'primary',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$surface-action-primary-pressed',
        },
        '&::after': {
          background: '$surface-action-primary-pressed',
        },
      },
    },

    {
      color: 'secondary',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$surface-interactive-hover',
        },
        '&::after': {
          background: '$surface-interactive-hover',
        },
      },
    },

    {
      color: 'danger',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$surface-danger-pressed',
        },
        '&::after': {
          background: '$surface-danger-pressed',
        },
      },
    },

    {
      variant: 'transparent',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$surface-base-subdued !important',
        },
        '&::after': {
          background: '$surface-base-subdued !important',
        },
      },
    },
    {
      variant: 'icon',
      animateOnHover: true,

      css: {
        '&::before': {
          background: '$surface-base-subdued !important',
          borderRadius: '50%',
          paddingBottom: '150%',
          top: '0%',
          left: '-10%',
        },
        '&::after': {
          background: '$surface-base-subdued !important',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    color: 'primary',
    fullWidth: false,
    animateOnHover: false,
    loading: false,
  },
});
