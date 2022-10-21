import { styled } from '../../styles';
import { Text } from '../Text';

export const Container = styled('div', {});

export const Label = styled(Text, {
  defaultVariants: {
    size: 'xs',
    color: 'caption',
  },
});

export const Steps = styled('div', {
  d: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-count), 1fr)',
  gap: '$2',
  mt: '$1',
});

export const Step = styled('div', {
  h: '$1',
  borderRadius: '$sm',
  bg: '$surface-base-hover',

  variants: {
    isActive: {
      true: {
        bg: '$surface-success-subdued',
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});
