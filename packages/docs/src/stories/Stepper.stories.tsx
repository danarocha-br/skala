import { StoryObj, Meta } from '@storybook/react';
import { Stepper, StepperProps } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    backHref: '/',
    backLabel: 'Back',
    items: [
      {
        href: '/',
        title: 'Step 1',
        isActive: true,
      },
      {
        href: '/',
        title: 'Step 2',
      },
      {
        href: '/',
        title: 'Step 3',
      },
    ],
  },
  argTypes: {
    backHref: {
      table: {
        category: 'Text',
      },
    },
    backLabel: {
      table: {
        category: 'Text',
      },
    },
    items: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta<StepperProps>;

export const Default: StoryObj<StepperProps> = {};
