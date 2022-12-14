import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Label',
    variant: 'primary',
    color: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
    loading: false,
    animateOnHover: false,
    onClick: () => 'clicked',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'transparent', 'icon'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
    animateOnHover: {
      table: {
        category: 'Modifiers',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    onClick: {
      table: {
        category: 'Function',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" fullWidth css={{ h: '100vh' }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<ButtonProps>;

export const DefaultVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
DefaultVariant.args = {
  variant: 'primary',
};

export const TransparentVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
TransparentVariant.args = {
  variant: 'transparent',
};

export const IconVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
IconVariant.args = {
  variant: 'icon',
  icon: 'plus',
};

export const Sizes: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" />
    <Button {...args} size="md" />
    <Button {...args} size="lg" />
  </>
);

export const StateDisabled: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" disabled />
    <Button {...args} size="md" disabled />
    <Button {...args} size="lg" disabled />
  </>
);

export const StateLoading: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" loading />
    <Button {...args} size="md" loading />
    <Button {...args} size="lg" loading />
  </>
);

export const ButtonIconSizes: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" variant="icon" icon="plus" />
    <Button {...args} size="md" variant="icon" icon="plus" />
    <Button {...args} size="lg" variant="icon" icon="plus" />
  </>
);

export const PrimaryWithIcon: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" icon="plus" />
    <Button {...args} size="md" icon="plus" />
    <Button {...args} size="lg" icon="plus" />
  </>
);

export const TransparentWithIcon: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="sm" icon="plus" variant="transparent" />
    <Button {...args} size="md" icon="plus" variant="transparent" />
    <Button {...args} size="lg" icon="plus" variant="transparent" />
  </>
);
