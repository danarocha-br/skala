import { styled } from '../../styles';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const Container = styled(AvatarPrimitive.Root, {
  fontFamily: '$sans',
  color: '$text-on-interactive',
  textTransform: 'uppercase',
  bg: '$brand-primary',

  d: 'inline-flex',
  align: 'center',
  justify: 'center',
  verticalAlign: 'middle',

  overflow: 'hidden',
  userSelect: 'none',

  variants: {
    variant: {
      circle: {
        borderRadius: '$circle',
      },
      square: {
        borderRadius: '$sm',
      },
    },

    size: {
      md: {
        fontSize: '$sm',
        w: '$5',
        h: '$5',
      },

      lg: {
        fontSize: '$md',
        w: '$6',
        h: '$6',
      },
    },
  },

  defaultVariants: {
    variant: 'circle',
    size: 'md',
  },
});

export const Image = styled(AvatarPrimitive.Image, {
  w: '100%',
  h: '100%',

  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const Fallback = styled(AvatarPrimitive.Fallback, {
  color: '$text-white',
  bg: '$brand-primary',
  fontSize: 'inherit',
  fontWeight: '$medium',

  w: '100%',
  h: '100%',
  d: 'flex',
  align: 'center',
  justify: 'center',

  variants: {
    loading: {
      true: {
        color: '$text-body',
        bg: '$loading-subdued',
      },
    },
  },

  defaultVariants: {
    loading: false,
  },
});
