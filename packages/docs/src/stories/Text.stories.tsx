import { Story, Meta } from '@storybook/react';
import { Text, TextProps, Stack } from '@skala/react';

export default {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    size: 'md',
    color: 'body',
    weight: 'regular',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => (
  <Stack direction="column" css={{ w: 500, py: '$6' }}>
    <Text {...args} size="4xl" />
    <Text {...args} size="3xl" />
    <Text {...args} size="2xl" />
    <Text {...args} size="xl" />
    <Text {...args} size="lg" />
    <Text {...args} size="md" />
    <Text {...args} size="sm" />
    <Text {...args} size="xs" />
    <Text {...args} size="xxs" />
  </Stack>
);

export const AllScales = Template.bind({});

export const CustomTag = Template.bind({});
Template.args = {
  as: 'strong',
};
