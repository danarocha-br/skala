import { StoryObj, Meta } from '@storybook/react';
import { Button } from '@skala/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary: StoryObj = {
  args: {
    children: 'Send',
  },
};
