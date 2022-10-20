import { StoryObj, Meta } from '@storybook/react';
import { Grid, GridProps, Text } from '@skala/react';

export default {
  title: 'Primitives/Grid',
  component: Grid,
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
        <Text>I am a row</Text>
        <Text>I am a row</Text>
        <Text>I am a row</Text>
        <Text>I am a row</Text>
      </>
    ),
  },
} as Meta<GridProps>;

export const Default: StoryObj<GridProps> = {
  args: {
    cols: '4',
    gap: '4',
  },
};
