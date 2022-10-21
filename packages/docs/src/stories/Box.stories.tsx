import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@skala/react';

export default {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: (
      <>
        <p>This is a box.</p>
      </>
    ),
    css: {
      color: '$text-body',
      bg: '$neutral700',
      p: '$10',
    },
  },
} as Meta;

export const Default: StoryObj<BoxProps> = {};
