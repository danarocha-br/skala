import { Story, Meta } from '@storybook/react';
import { Box, Icon, SelectMenu, SelectMenuProps, Stack } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/SelectMenu',
  component: SelectMenu.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Status',
    defaultValue: 'invoiced',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
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
        <Stack align="center" justify="center" css={{ h: '100vh', px: 200 }}>
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta;

type CustomSelectProps = {
  label: string;
  color: string;
  value: string;
  disabled?: boolean;
};

const CustomSelectItem = ({
  value,
  color,
  label,
  disabled = false,
}: CustomSelectProps) => (
  <SelectMenu.Item value={value} disabled={disabled}>
    <SelectMenu.ItemText>
      <Stack align="center">
        <Box
          css={{
            w: '$3',
            h: '$3',
            borderRadius: '$sm',
            bg: color,
          }}
        />
        {label}
      </Stack>
    </SelectMenu.ItemText>
    <SelectMenu.Indicator>
      <Icon
        label="indicator"
        name="check"
        size="sm"
        color="current"
        css={{ transform: 'scale(0.8)' }}
      />
    </SelectMenu.Indicator>
  </SelectMenu.Item>
);

export const Default: Story<SelectMenuProps> = (args) => {
  return (
    <SelectMenu.Root defaultValue="draft" {...args}>
      <SelectMenu.Group>
        <CustomSelectItem
          value="draft"
          label="Rascunho"
          color="$surface-warning-hover"
        />
        <CustomSelectItem
          value="invoiced"
          label="Enviado"
          color="$surface-interactive-pressed"
        />

        <CustomSelectItem
          value="paid"
          label="Pago"
          color="$surface-action-secondary-default"
        />
        <CustomSelectItem
          value="disabled"
          label="Disabled"
          color="$surface-action-primary-subdued"
          disabled
        />
      </SelectMenu.Group>
    </SelectMenu.Root>
  );
};
