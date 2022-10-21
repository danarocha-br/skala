import { styled, keyframes } from '../../styles';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(15px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-15px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-15px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(15px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  fontFamily: '$sans',
  background: '$surface-base-default',
  borderRadius: '$sm',
  boxShadow: '$low',

  w: '100%',
  minWidth: 200,
  p: '$1',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '500ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'currentColor',
  color: '$text-on-interactive',
});

const itemStyles = {
  color: '$text-body',
  fontSize: '$sm',
  fontWeight: '$regular',

  w: '100%',
  px: '$2',
  py: 12,

  cursor: 'pointer',
  transition: '$slow',
  outline: 'none',

  '&:hover': {
    background: '$action-transparent-hover',
  },

  '&[data-disabled]': {
    color: '$surface-base-disabled',
    pointerEvents: 'none',
  },

  '&:focus': {
    background: '$action-transparent-hover',
    border: 'none',
    outline: 'none',
  },

  '& > a': {
    all: 'unset',
    d: 'flex',
    justify: 'space-between',
  },
};

export const DropdownItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
});

export const RightSlot = styled('div', {
  ml: 'auto',
  pr: '$3',
  color: '$text-caption',
  ':focus > &': {
    color: '$text-body',
  },
  '[data-disabled] &': {
    color: '$action-transparent-hover',
  },
});

