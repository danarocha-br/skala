import { styled, keyframes } from '../../styles';

import {
  Root,
  Trigger,
  Overlay,
  Content,
  Close,
  Title,
  Description,
} from '@radix-ui/react-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 0.8 },
});

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transformOrigin: 'bottom left',
    transform: 'translate(-50%, -48%) scale(.96)',
  },

  '100%': {
    opacity: 0.9,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const DialogOverlay = styled(Overlay, {
  backgroundColor: '$neutral800',
  position: 'fixed',
  inset: 0,
  left: 0,

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 100ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

export const DialogContent = styled(Content, {
  fontFamily: '$sans',
  backgroundColor: '$surface-base-default',
  borderRadius: '$md',
  boxShadow: '$high',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '650px',
  maxHeight: '85vh',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
    animationDelay: '10ms',
  },
  '&:focus': { outline: 'none' },
});

export const DialogTitle = styled(Title, {
  margin: 0,
  fontWeight: '$medium',
  color: '$text-subtext',
  fontSize: '$md',
  pt: '$2',

  variants: {
    variant: {
      danger: {
        color: '$surface-danger-default',
      },
      transactional: {},
      passive: {},
    },
  },

  defaultVariants: {
    variant: 'transactional',
  },
});

export const DialogDescription = styled(Description, {
  margin: '10px 0 20px',
  color: '$text-caption',
  fontSize: 15,
  lineHeight: 1.5,
  px: '$3',
});

export const DialogClose = styled(Close, {
  position: 'relative',
  right: -8,
});

export const DialogFooter = styled('footer', {
  d: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: '$3',
  px: '$2',
  py: '$2',
});

export const Dialog = styled(Root, {});
export const DialogTrigger = Trigger;
