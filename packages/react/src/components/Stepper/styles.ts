import { styled } from '../../styles';


export const Menu = styled('ul', {
  all: 'unset',
  fontFamily: '$sans',

  d: 'flex',
  fd: 'column',

  pointerEvents: 'none',

  w: '100px',
});

export const MenuItem = styled('li', {
  all: 'unset',
  fontFamily: '$sans',
  color: '$text-subtext',
  whiteSpace: 'nowrap',

  '&::after': {
    content: '',
    position: 'absolute',
    left: '$2',
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: '$form-border',
    transition: '$base',
  },

  '&:not(:last-child)': {
    '&::before': {
      content: '',
      position: 'absolute',
      left: '12px',
      mt: '$2',
      w: '2px',
      h: '$5',
      background: '$form-border',
      transition: '$base',
    },
  },

  '&:first-child': {
    mt: '$4',
  },

  '& a': {
    all: 'unset',
    cursor: 'pointer',
    mb: '$3',

    color: '$text-body',
    fontWeight: '$medium',

    d: 'inline-block',
    opacity: 0,
    transform: 'translateY(-10px)',
    transition: '$base',
    ml: '$5',

    '&:hover': {
      color: '$surface-interactive-subdued',

      '&::after': {
        bg: '$surface-interactive-subdued',
      },
    },
  },

  variants: {
    isActive: {
      true: {
        '& a': {
          color: '$surface-interactive-subdued',
        },
        '&::after': {
          bg: '$surface-interactive-subdued',
        },

      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});

export const BackButton = styled('a', {
  all: 'unset',
  fontFamily: '$sans',

  cursor: 'pointer',
  fontWeight: '$medium',

  d: 'flex',
  alignItems: 'center',
  justifyItems: 'center',

  gap: '$2',

  '& div': {
    position: 'relative',
    d: 'flex',
    alignItems: 'center',
    justifyItems: 'center',

    w: '$5',
    h: '$5',
    borderRadius: '50%',
    background: '$surface-interactive-subdued',
  },

  '& span': {
    d: 'inline-block',
    color: '$text-caption',
    marginLeft: '$2',
    opacity: 0,
    transform: 'translateX(-20px)',
    transition: 'all .2s ease',
  },

  '&:hover': {
    '& span': {
      color: '$text-body',
    },
  },
});

export const Container = styled('div', {
  position: 'relative',

  '&:hover': {
    w: 'auto',

    [`& ${Menu}`]: {
      opacity: 1,
      transform: 'translateY(0)',
      pointerEvents: 'auto',
    },

    [`& ${MenuItem}`]: {
      mb: '$4',

      '&::after': {
        transform: 'translateY(6px)',
      },

      '& a': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },

    [`& ${BackButton}`]: {
      '& span': {
        transform: 'translateX(0)',
        opacity: 1,
      },
    },
  },

  variants: {
    isActive: {
      true: {
        '&:hover': {
          [`& ${MenuItem}`]: {
            '&::after': {
              bg: '$surface-interactive-default',
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});

