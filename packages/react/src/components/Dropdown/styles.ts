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
  boxShadow: '$high',

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
  [`.dark-theme &`]: {
    color: '$text-inverted',
  },
});

const itemStyles = {
  all: 'unset',
  color: '$text-subtext',
  fontSize: '$sm',
  fontWeight: '$regular',
  textAlign: 'left',
  borderRadius: '$sm',
  border: '1px dashed transparent',

  height: '$5',
  px: '$3',
  d: 'flex',
  align: 'center',

  cursor: 'pointer',
  transition: '$fast',
  outline: 'none',
  userSelect: 'none',

  '&:hover': {
    color: '$text-body !important',
    background: '$surface-interactive-constrast !important',
    border: '1px dashed transparent !important',
  },

  '&[data-disabled]': {
    color: '$text-caption',
    cursor: 'not-allowed !important',
    pointerEvents: 'none',
  },

  '&:focus': {
    color: '$text-body !important',
    background: '$surface-interactive-constrast !important',
    border: '1px dashed $surface-interactive-disabled',
    outline: 'none',
  },

  '& > a': {
    all: 'unset',
    d: 'flex',
    w: '100%',
    justify: 'space-between',
  },
};

export const DropdownItem = styled(DropdownMenuPrimitive.Item, {
  ...itemStyles,
});

export const RightSlot = styled('div', {
  color: '$text-caption',
  fontSize: '$sm',

  ':focus > &': {
    color: '$text-body',
  },
  '[data-disabled] &': {
    color: '$action-transparent-hover',
  },
});

export const DropdownSeparator = styled(DropdownMenuPrimitive.Separator, {
  bg: '$surface-base-hover',
  h: 1,
  my: '$2',
  position: 'relative',
});
