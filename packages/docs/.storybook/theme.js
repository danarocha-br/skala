import { create } from '@storybook/theming';

import { colors } from '@skala/design-tokens';

export default create({
  base: 'dark',
  brandTitle: 'Skala Design System',
  brandUrl: 'https://ocompasso.com',
  brandImage: '',
  brandTarget: '_self',

  colorPrimary: colors.forest600,
  colorSecondary: colors.royal300,

  // UI
  appBg: colors.neutral800,
  appContentBg: colors.neutral600,
  appBorderColor: colors.neutral900,
  appBorderRadius: 2,

  // Typography
  fontBase: '"Effra", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.neutral200,
  textInverseColor: colors.froly300,

  // Toolbar default and active colors
  barTextColor: colors.neutral100,
  barSelectedColor: colors.macaroni500,
  barBg: colors.neutral900,

  // Form colors
  inputBg: colors.neutral300,
  inputBorder: colors.neutral700,
  inputTextColor: colors.neutral800,
  inputBorderRadius: 4,
});
