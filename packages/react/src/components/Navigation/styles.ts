import { Content, Root } from '@radix-ui/react-collapsible';
import { transparentize } from 'polished';
import { styled } from '../../styles';

export const Anchor = styled('a', {
  color: '$text-body',
  fontFamily: '$sans',
  textDecoration: 'none',
  opacity: 0.65,

  d: 'inline-flex',
  align: 'center',
  gap: '$3',
  px: '$2',
  py: '$2',
  borderRadius: '$sm',

  w: '100%',
  position: 'relative',
  transition: '$base',

  outline: '1px solid transparent',

  '& > span': {
    position: 'relative',
    top: '-2px',
    transform: 'translateX(0px)',
    transition: '$slow',
  },

  '&:focus-visible': {
    opacity: 1,
    outline: '1px dashed',
    outlineOffset: '2px',
    outlineColor: '$surface-base-pressed',

    [`.dark-theme &`]: {
      outlineColor: '$neutral700'
    }
  },

  variants: {
    isActive: {
      true: {
        color: '$text-body',
        fontWeight: '$medium',
        background: '$royal50',
        opacity: 1,

        '& > svg': {
          color: '$brand-primary',
        },

        [`.dark-theme &`]: {
          color: '$text-on-interactive',
          background: '$surface-interactive-disabled',

          '& > svg': {
            color: '$surface-danger-subdued',
          },
        },
      },
    },

    hasShortcut: {
      true: {},
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.4,

        '&::after': {
          content: 'PRO',
          position: 'absolute',
          right: '$2',

          color: '$text-on-interactive',
          backgroundColor: '$surface-action-primary-default',
          fontSize: '$xs',
          py: '$1',
          px: '$2',
          borderRadius: '$sm',

          [`.dark-theme &`]: {
            color: '$surface-action-primary-constrast',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      isActive: true,
      hasShortcut: true,
      css: {
        fontWeight: '$regular',
      },
    },

    {
      disabled: false,
      css: {
        '&:hover': {
          color: '$text-body',
          bg: '$surface-action-transparent-disabled',
          opacity: 1,

          '& svg': {
            fill: '$brand-primary',
          },

          '& > span': {
            transform: 'translateX(4px)',
          },
        },
      },
    },

    {
      hasShortcut: true,
      disabled: false,
      css: {
        '&:hover': {
          '&::after': {
            content: 'attr(data-title)',
            position: 'absolute',
            right: '$2',

            color: '$text-caption',
            fontSize: '$xs',
            py: '$1',
            px: '$2',
            borderRadius: '$sm',
          },
        },
      },
    },
  ],

  defaultVariants: {
    isActive: false,
    hasShortcut: false,
    disabled: false,
  },
});

export const Container = styled('aside', {
  h: '100%',
  d: 'block',
  bg: 'transparent',
});

export const CollapsibleContent = styled(Content, {
  overflow: 'hidden',
  d: 'flex',
  flexDirection: 'column',
  justify: 'space-between',
  px: '$2',
  h: 'calc(100% - 60px)',

  '&[data-state="open"]': {
    animation: `${open} 400ms ease-in`,
    backgroundColor: '$surface-base-default',
  },
  '&[data-state="closed"]': {
    animation: `${close} 200ms ease-in`,
  },
});

export const CollapsibleRoot = styled(Root, {
  height: '100vh',
  position: 'sticky',
  top: 0,

  '&[data-state="open"]': {
    bg: '$surface-base-subdued',
    borderRight: '1px solid',
    borderColor: `${transparentize(0.7, '#D5DBDB')}`,
    minWidth: 280,
  },

  ['.dark-theme &']: {
    borderColor: `${transparentize(0.7, '#252e30')}`,
  },
});

export const Header = styled('div', {
  px: '$2',
  pb: 4,
  pt: '$2',

  d: 'flex',
  justify: 'space-between',
  align: 'center',

  '&[data-state="open"]': {
    backgroundColor: '$surface-base-default',
  },

  variants: {
    isClosed: {
      true: {
        borderBottom: '1px solid',
        borderColor: `${transparentize(0.5, '#D5DBDB')}`,

        ['.dark-theme &']: {
          borderColor: `${transparentize(0.7, '#252e30')}`,
        },
      },
    },
  },

  defaultVariants: {
    isClosed: false,
  },
});

export const Footer = styled('footer', {
  px: '$2',
  py: '$2',

  d: 'flex',
  justify: 'space-between',
  align: 'center',
  w: '100%',
});

export const ToogleButton = styled('button', {
  all: 'unset',
  w: 'auto',

  p: '$2',
  pb: '$1',
  borderRadius: '$md',
  transition: '$base',
  border: '1px solid transparent',

  '&:hover': {
    bg: '$surface-action-transparent-hover',
  },

  '&:focus': {
    bg: '$surface-action-transparent-disabled',
    border: '1px dashed $surface-base-hover',
  },
});

export const Svg = styled('svg', {
  transform: 'scale(1.1)',

  '& .fill': {
    fill: '$loading-subdued',
  },
  '& .outline': {
    fill: '$text-body',
  },
});

export const MobileMenuBar = styled('div', {
  position: 'fixed',
  bottom: 0,
  zIndex: '$100',

  w: '100%',
  h: '$10',

  bg: '$surface-interactive-default',
});
