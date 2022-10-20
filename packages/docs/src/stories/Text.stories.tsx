import { Story, Meta } from '@storybook/react';
import { Text, TextProps, Box } from '@skala/react';

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
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius rerum porro natus ea, laudantium incidunt ex blanditiis repellendus explicabo voluptate est. Rem laborum eius quidem hic neque aliquam ducimus?',
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => (
  <Box css={{ w: 300 }}>
    <Text {...args} />
  </Box>
);

export const AllScales = Template.bind({});

export const CustomTag = Template.bind({});
Template.args = {
  as: 'strong',
};
