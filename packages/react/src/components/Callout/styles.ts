import { styled } from '../../styles';


export const Header = styled('header', {
  fontSize: '$base',
  fontWeight: '$medium',
  borderTopRightRadius: '$md',

  d: 'flex',
  alignItems: 'center',
  gap: '$2',
  w: '100%',
  h: '$4',
  py: '$1',
  position: 'relative',

  [`.dark-theme &`]: {
    color: '$text-inverted',
  },

  '& h5': {
    all: 'unset',
    px: '$4',
  },

  variants: {
    variant: {
      info: {
        color: '$surface-interactive-subdued',
        background: '#d2e7feb3',

        [`.dark-theme &`]: {
          color: '$text-on-interactive',
          background: '#405fed1c',
        },
      },
      success: {
        color: '$surface-success-default',
        bg: '$forest100',

        [`.dark-theme &`]: {
          color: '$text-on-interactive',
          bg: '#37b1351a',
        },
      },
      danger: {
        color: '$surface-danger-default',
        bg: '$froly100',

        [`.dark-theme &`]: {
          color: '$text-on-interactive',
          bg: '#f1786f17',
        },
      },
      warning: {
        color: '$surface-warning-pressed',
        bg: '#fddeba8c',

        [`.dark-theme &`]: {
          color: '$text-on-interactive',
          bg: '#fcc88d1f',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export const Container = styled('div', {
  fontFamily: '$sans',
  w: '100%',
  d: 'flex',

  borderRadius: '$md',
  border: '1px solid',
  borderColor: '$surface-action-transparent-pressed',

  fontSize: '$sm !important',

  '& .callout__content': {
    px: '$4',
    pb: '$2',
  },

  [`.dark-theme &`]: {
    borderColor: '$surface-action-transparent-disabled',
  },
});

export const Marker = styled('div', {
  w: '$1',
  h: 'auto',
  borderTopLeftRadius: '$md',
  borderBottomLeftRadius: '$md',

  variants: {
    variant: {
      info: {
        bg: '$surface-interactive-subdued',
      },
      success: {
        bg: '$surface-success-default',
      },
      danger: {
        bg: '$surface-danger-default',
      },
      warning: {
        bg: '$surface-warning-default',
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

