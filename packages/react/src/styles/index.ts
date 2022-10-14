import { createStitches, defaultThemeMap } from '@stitches/react';
import {
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  radii,
  spacing,
  fontFamilies,
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
    colors: colors,
    fonts: fontFamilies,
    fontSizes: fontSize,
    fontWeights: fontWeight,
    lineHeights: lineHeight,
    radii: radii,
    space: spacing,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
});
