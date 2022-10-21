import { StoryObj, Meta } from '@storybook/react';
import { Skeleton, SkeletonProps } from '@skala/react';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
} as Meta<SkeletonProps>;

export const Default: StoryObj<SkeletonProps> = {};
