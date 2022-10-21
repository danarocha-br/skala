import { Story, Meta } from '@storybook/react';
import { Text, TextProps, Grid } from '@skala/react';

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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor. ',
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => (
  <Grid cols="2" rows="9" align="center" css={{ maxWidth: 600, py: '$6' }}>
    <Text size="sm" color="caption">
      4xl
    </Text>
    <Text {...args} size="4xl" />
    <Text size="sm" color="caption">
      3xl
    </Text>
    <Text {...args} size="3xl" />
    <Text size="sm" color="caption">
      2xl
    </Text>
    <Text {...args} size="2xl" />
    <Text size="sm" color="caption">
      xl
    </Text>
    <Text {...args} size="xl" />
    <Text size="sm" color="caption">
      lg
    </Text>
    <Text {...args} size="lg" />
    <Text size="sm" color="caption">
      md
    </Text>
    <Text {...args} size="md" />
    <Text size="sm" color="caption">
      sm
    </Text>
    <Text {...args} size="sm" />
    <Text size="sm" color="caption">
      xs
    </Text>
    <Text {...args} size="xs" />
    <Text size="sm" color="caption">
      xxs
    </Text>
    <Text {...args} size="xxs" />
  </Grid>
);

export const AllScales = Template.bind({});

export const CustomTag = Template.bind({});
Template.args = {
  as: 'strong',
};
