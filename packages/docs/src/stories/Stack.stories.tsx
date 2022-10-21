import { StoryObj, Meta } from '@storybook/react';
import { Stack, StackProps, Text } from '@skala/react';

const CHILDREN = Array.from({ length: 5 }).map((_, i) => (
  <Text css={{ bg: '$froly200', py: '$2', px: '$6' }}>I am a row {1 + i}</Text>
));

export default {
  title: 'Primitives/Stack',
  component: Stack,
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
        {CHILDREN.map((tag, index) => (
          <Text key={index}>{tag}</Text>
        ))}
      </>
    ),
  },
} as Meta<StackProps>;

export const Default: StoryObj<StackProps> = {
  args: {
    direction: 'column',
    gap: '6',
    align: 'center',
    justify: 'center',
  },
};
