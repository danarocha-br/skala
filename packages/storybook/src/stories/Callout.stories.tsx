import { StoryObj, Meta } from '@storybook/react';
import { Callout, CalloutProps, Stack, Text } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'I am a title',
    icon: 'alert',
    variant: 'info',
    children: <Text>This is a Callout content.</Text>,
  },
  argTypes: {
    title: {
      table: {
        category: 'Text',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
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
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" css={{ h: '100vh', w: 399 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

export const Info: StoryObj<CalloutProps> = {};
export const Danger: StoryObj<CalloutProps> = {
  args: {
    variant: 'danger',
  },
};
export const Success: StoryObj<CalloutProps> = {
  args: {
    variant: 'success',
  },
};
export const Warning: StoryObj<CalloutProps> = {
  args: {
    variant: 'warning',
  },
};
