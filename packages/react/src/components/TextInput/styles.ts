import { Button } from 'reakit';
import { styled } from '../../styles';

export const Addon = styled('span', {
  color: '$text-body',
  fontSize: '$sm',

  position: 'absolute',
  top: '$5',
  mt: 2,
  left: '$3',

  variants: {
    isFocused: {
      true: {
        color: '$text-on-interactive',
      },
    },
    isDisabled: {
      true: {
        color: '$text-subtext',
      },
    },
    isTable: {
      true: {
        top: '$3',
      },
    },
    isReadOnly: {
      true: {
        top: '$4',
        mt: 3,
        left: '$0',
      },
    },
  },

  defaultVariants: {
    isFocused: false,
  },
});

export const BaseInputStyles = {
  fontFamily: '$sans',
  color: '$text-body',
  fontSize: 'max($md, $sm)',
  bg: '$form-background',
  py: '$2',
  px: '$3',
  border: 'none',
  borderTop: '1px solid $colors$form-border',
  w: 'stretch',
  maxWidth: '100%',

  appearance: 'none',
  transition: 'all $transitions$base',

  '&::placeholder': {
    color: '$text-subtext',
    fontWeight: '$normal',
    fontFamily: '$sans',

    opacity: 0.4,
  },

  '&:focus:not([readonly])': {
    color: '$text-on-interactive',
    bg: '$form-focus',

    outline: 'none',
  },

  '&:read-only': {
    border: 'none',
    outline: 'none',
    padding: 0,
    bg: 'transparent',
    borderTop: 'none',
    userSelect: 'none !important',
    pointerEvents: 'none',

    '&:focus': {
      color: '$colors$text-body !important',
      bg: 'transparent !important',

      '&::placeholder': {
        color: '$subtext !important',
      },
    },

    '&:hover': {
      bg: 'transparent !important',
    },

    [`& ${Addon}`]: {
      color: '$subtext !important',
    },
  },

  '&:disabled': {
    cursor: 'not-allowed',
    bg: '$form-background !important',
    padding: '$2 $3',
    pointerEvents: 'auto',

    '&:hover': {
      bg: '$form-background !important',
    },
  },

  '&:-webkit-autofill': {
    '-webkit-box-shadow': '0 0 0 $spacings$2 $colors$text-body inset',
    filter: 'none',
  },

  variants: {
    variant: {
      default: {
        borderBottomRightRadius: '$sm',
        borderBottomLeftRadius: '$sm',

        h: '100%',
      },
      table: {
        borderRadius: 0,
        border: '1px solid transparent',

        h: '$5',

        '&[readonly]': {
          padding: '$0 $2',
        },

        '&:hover:not([readonly]):not([disabled])': {
          border: '1px solid $colors$form-focus',
        },
      },
    },

    isFocused: {
      true: {
        '&::placeholder': {
          opacity: 0,
        },
      },
    },

    hasAddon: {
      true: {
        pl: '$9 !important',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    isFocused: false,
    hasAddon: false,
  },
};

export const Input = styled('input', {
  ...BaseInputStyles,
});

export const Container = styled('div', {
  fontFamily: '$sans',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  zIndex: 2,

  bg: '$surface-base-subdued',

  transition: 'all $transitions$base',
  position: 'relative',

  '@motion': {
    transition: 'none',
  },

  '&:hover': {
    borderColor: '$form-focus',

    '& input:not([readonly])::placeholder': {
      color: '$text-on-interactive',
    },

    '& input:disabled::placeholder': {
      color: '$text-subtext !important',
    },

    [`& ${Addon}`]: {
      '& input:disabled': {
        color: '$text-subtext !important',
      },
    },

    '& input:not([readonly])': {
      bg: '$form-hover',
      borderColor: '$form-focus',
      color: '$text-on-interactive !important',

      '&:focus': {
        bg: '$form-focus',
      },

      '&:hover': {
        color: '$text-on-interactive',
      },
    },
  },

  variants: {
    variant: {
      default: {
        borderRadius: '$md',
        border: '1px solid',
        borderColor: '$form-border',
      },
      table: {
        borderRadius: 0,
      },
    },
    isFocused: {
      true: {
        borderColor: '$form-focus',
        transition: 'all $transitions$fast',
      },
    },

    isDisabled: {
      true: {
        opacity: 0.7,

        bg: 'transparent !important',

        '& input:disabled': {
          bg: '$form-border !important',
        },

        '&:hover': {
          borderColor: '$form-border',

          '& input:disabled': {
            bg: '$form-border !important',
          },
        },
      },
    },

    hasIcon: {
      true: {
        '& .input__icon': {
          mr: '$1',

          '&--error': {
            right: '$6',
          },
        },
      },
    },

    isReadOnly: {
      true: {
        border: 'none',
        bg: 'transparent !important',
      },
    },

    hasError: {
      true: {
        borderColor: '$form-error',

        '& input': {
          borderTop: '1px solid $colors$form-error',
        },

        '& .input__action': {
          transform: 'translateX(-$space$5)',
        },
      },
    },

    isLoading: {
      true: {
        '& .input__action': {
          transform: 'translateX(-$space$5)',
        },
      },
    },
  },

  compoundVariants: [
    {
      isFocused: true,
      hasIcon: true,
      css: {
        '.input__icon': {
          fill: '$form-focus',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'default',
    isFocused: false,
    isDisabled: false,
    isReadOnly: false,
    hasIcon: false,
    isLoading: false,
  },
});

export const Label = styled('label', {
  color: '$text-subtext',
  fontSize: '$xs',
  fontWeight: '$medium',
  padding: '$1 $3',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  h: '$3',
  w: 'stretch',

  position: 'relative',

  '&.input__error-icon': {
    position: 'absolute',
    right: '$1',
  },

  variants: {
    isReadOnly: {
      true: {
        pl: '$0',
      },
    },
  },

  defaultVariants: {
    isReadOnly: false,
  },
});

export const SettingsButton = styled(Button, {
  all: 'unset',
  color: '$text-body',
  fontSize: '$xs',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  bg: 'transparent',
  zIndex: '$100',
  position: 'absolute',
  right: '$2',
  top: 4,

  '&:hover': {
    color: '$surface-action-primary-hover',
  },
  '&:focus': {
    color: '$surface-action-primary-focus',
  },
});
