import { styled } from '../../styles';

export const Trigger = styled('button', {
  bg: 'transparent',
  cursor: 'pointer',
  pl: '$2',
  pr: '$3',
  py: '$2',
  border: '1px solid transparent',
  borderRadius: '$sm',
  transition: '$base',
  transform: 'translateX(0)',

  '&:hover': {
    bg: '$surface-base-disabled',

    '& .avatar__username': {
      transform: 'translateX(3px)',
    },
  },

  '&:focus': {
    border: '1px dashed $surface-base-hover',
    bg: '$action-transparent-disabled',

    '& .avatar__username': {
      transform: 'translateX(3px)',
    },
  },
});
