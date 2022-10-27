import { styled } from '../../styles';
import { motion } from 'framer-motion';

export const Container = styled(motion.div, {
  fontFamily: '$sans',
  position: 'fixed',

  userSelect: 'none',
  w: 'inherit',
  h: 'auto',
  d: 'flex',
  flexDirection: 'column',
  gap: '$2',

  zIndex: '100',

  variants: {
    directionY: {
      top: {
        top: '$4',
      },
      bottom: {
        bottom: '$4',
      },
    },

    directionX: {
      left: {
        left: '$4',
      },
      right: {
        right: '$4',
      },
    },
  },

  defaultVariants: {
    directionX: 'right',
    directionY: 'top',
  },
});

export const Toast = styled(motion.div, {
  position: 'relative',
  pb: '$2',

  borderRadius: '$md',
  boxShadow: '$low',
  border: '1px solid',
  borderColor: '$surface-action-transparent-pressed',
  bg: '$surface-base-subdued',
  // w: '100%',

  '@bp-md': {
    w: 400,
  },
});

export const Marker = styled('div', {
  w: '100%',
  h: '$1',

  bg: 'red',
  borderTopLeftRadius: '$md',
  borderTopRightRadius: '$md',

  variants: {
    variant: {
      info: { bg: '$surface-interactive-subdued' },
      success: { bg: '$surface-success-default' },
      danger: { bg: '$surface-danger-subdued' },
      warning: { bg: '$surface-warning-default' },
      neutral: { bg: '$surface-base-pressed' },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const Title = styled('div', {
  color: '$text-body',
  fontWeight: '$medium',
  d: 'flex',
  gap: '$2',
  justifyContent: 'space-between',

  pt: '$2',
  pb: '$1',
  px: '$2',
  position: 'relative',

  variants: {
    variant: {
      info: {
        '& svg': {
          color: '$surface-interactive-subdued',
        },
      },
      success: {
        '& svg': {
          color: '$surface-success-default',
        },
      },
      danger: {
        '& svg': {
          color: '$surface-danger-default',
        },
      },
      warning: {
        '& svg': {
          color: '$surface-warning-default',
        },
      },
      neutral: {
        '& svg': {
          color: '$text-caption',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'info',
  },
});

export const Message = styled('div', {
  color: '$text-subtext',

  px: '$3',
  pt: '$2',
  pb: '$1',
});
