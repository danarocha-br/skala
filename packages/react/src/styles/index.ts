import Stitches, {
  createStitches,
  defaultThemeMap,
} from '@stitches/react';

import {
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  radii,
  spacing,
  fontFamilies,
  light,
  dark,
} from '@skala/design-tokens';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
} = createStitches({
  theme: {
    colors: { ...colors, ...light },
    fonts: fontFamilies,
    fontSizes: fontSize,
    fontWeights: fontWeight,
    lineHeights: lineHeight,
    radii: radii,
    space: spacing,
    zIndices: {
      1: '1',
      2: '2',
      3: '3',
      100: '100',
      max: '999',
    },
    transitions: {
      base: '0.3s ease-in-out',
      slow: '0.5s ease-in-out',
      fast: '0.15s ease-in-out',
    },
    media: {
      'bp-sm': '(min-width: 520px)',
      'bp-md': '(min-width: 900px)',
      'bp-lg': '(min-width: 1200px)',
      'bp-xl': '(min-width: 1800px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  utils: {
    d: (value: any) => ({
      display: value,
    }),
    p: (value: any) => ({
      padding: value,
    }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    spaceY: (value: any) => ({
      marginTop: `calc(${value} * calc(1 - 0))`,
      marginBottom: `calc(${value} * 0)`,
    }),

    spaceX: (value: any) => ({
      marginLeft: `calc(${value} * calc(1 - 0))`,
      marginRight: `calc(${value} * 0)`,
    }),

    fd: (value: any) => ({
      flexDirection: value,
    }),

    align: (value: any) => ({
      alignItems: value,
    }),

    ac: (value: any) => ({
      alignContent: value,
    }),

    justify: (value: any) => ({
      justifyContent: value,
    }),

    bg: (value: any) => ({
      backgroundColor: value,
    }),

    radii: (value: any) => ({
      borderRadius: value,
    }),
    btrr: (value: any) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: any) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: any) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: any) => ({
      borderTopLeftRadius: value,
    }),

    shadow: (value: any) => ({ boxShadow: value }),

    lh: (value: any) => ({
      lineHeight: value,
    }),

    ox: (value: any) => ({ overflowX: value }),
    oy: (value: any) => ({ overflowY: value }),

    pe: (value: any) => ({
      pointerEvents: value,
    }),

    userSelect: (value: any) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: any) => ({
      width: value,
      height: value,
    }),

    w: (value: any) => ({
      width: value,
    }),

    h: (value: any) => ({
      height: value,
    }),

    appearance: (value: any) => ({
      WebkitAppearance: value,
      appearance: value,
    }),

  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...dark,
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    margin: 0,
    color: '$text-body',
    backgroundColor: '$background-default',
  },

  button: {
    border: 'none',
    outline: 'none',
  },

  'body, button': {
    color: '$text-on-interactive',
    fontFamily: '$sans',
    fontSize: '$md',
  },

  '[disabled]': {
    cursor: 'not-allowed',
  },

  'html, body, #root, #__next, #__next > div': {
    height: '100%',
    zIndex: 0,

    '@bp-md': {
      height: 'auto',
    },
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'button, input, textarea': {
    fontFamily: '$sans',
    fontDisplay: 'swap',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$brand-primary',
  },

  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus':
    {
      boxShadow: '0 0 0px 4px hsla(21, 100%, 91%, 1) inset !important',
      transition: 'background-color 5000s ease-in-out 0s',
      filter: 'none',
    },
});
