import { CSS, styled } from '../../styles';

export type TextProps = {
  as?: React.ElementType;
  css?: CSS;
} & React.ComponentProps<typeof Text>;

export const Text = styled('span', {
  margin: '0',
  fontFamily: '$sans',
  fontWeight: '$regular',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
        lineHeight: '$1',
      },
      xs: {
        fontSize: '$xs',
        lineHeight: '$2',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$3',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$4',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$4',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$5',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$6',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$5',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$6',
      },
    },

    color: {
      body: {
        color: '$text-body',
      },
      subtext: {
        color: '$text-subtext',
      },
      caption: {
        color: '$text-caption',
      },
      success: {
        color: '$text-success',
      },
      danger: {
        color: '$text-danger',
      },
      warning: {
        color: '$text-warning',
      },
      onInteractive: {
        color: '$text-onInteractive',
      },
      inverted: {
        color: '$text-inverted',
      },
    },

    weight: {
      light: {
        fontWeight: '$light',
      },
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
    },

    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },

    leading: {
      1: {
        lineHeight: '$1',
      },
      2: {
        lineHeight: '$2',
      },
      3: {
        lineHeight: '$3',
      },
      4: {
        lineHeight: '$4',
      },
      5: {
        lineHeight: '$5',
      },
      6: {
        lineHeight: '$6',
      },
      7: {
        lineHeight: '$7',
      },
      8: {
        lineHeight: '$8',
      },
      9: {
        lineHeight: '$9',
      },
    },
  },

  defaultVariants: {
    align: 'left',
    size: 'md',
    color: 'body',
    leading: '4',
    weight: 'regular',
  },
});
