import { styled } from '../../styles';

export const Container = styled('div', {
  fontSize: '$xs',
  fontFamily: '$sans',

  pb: '$1',
  pt: '$2',
  px: '$3',

  position: 'relative',
  top: -4,
  zIndex: '1',

  color: '$text-danger',
  bg: '$froly100',
  border: '1px solid $froly200',

  [`.dark-theme &`]: {
    color: '$neutral200',
    bg: '#f1786f20',
    border: '1px solid #f1786f10',
  },

  variants: {
    variant: {
      inside: {
        borderBottomLeftRadius: '$md',
        borderBottomRightRadius: '$md',
      },
      outside: {
        mt: '$2',
        borderRadius: '$md',
      },
    },
  },

  defaultVariants: {
    variant: 'inside',
  },
});
