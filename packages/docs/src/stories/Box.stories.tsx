import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Text } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    children: (
      <>
        <Text>This is a box.</Text>
      </>
    ),
    css: {
      color: '$text-body',
      bg: '$surface-base-pressed',
      p: '$10',
    },
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

export const Default: StoryObj<BoxProps> = {};
