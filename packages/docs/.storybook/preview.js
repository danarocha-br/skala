import { themes } from '@storybook/theming';
import { globalStyles } from '../../react/src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Intro',
        'Foundations',
        'Primitives',
        'Components',
        'Navigation',
        'Form',
        'Templates',
      ],
    },
  },
};


// export const decorators = [
//   (Story) => (
//     <>
//       {globalStyles()}
//       <Story />
//     </>
//   ),
// ];