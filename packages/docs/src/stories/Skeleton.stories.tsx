import { StoryObj, Meta } from '@storybook/react';
import { Skeleton, SkeletonProps } from '@skala/react';

export default {
  title: 'Components/Skeleton',
  component: Skeleton.Root,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=17%3A17157',
    },
  },
  args: {
    children: <Skeleton.Item width={300} height={12} count={5} />,
  },
  argTypes: {
    children: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta<SkeletonProps>;

export const Example: StoryObj<SkeletonProps> = {};
