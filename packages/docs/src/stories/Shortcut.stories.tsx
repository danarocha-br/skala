import { Meta, Story } from '@storybook/react';
import { Shortcut, ShortcutProps } from '@skala/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    shortcut: 'cmd + D',
  },
  argTypes: {
    shortcut: {
      table: {
        category: 'Text',
      },
    },
  },
} as Meta<ShortcutProps>;

export const Default: Story<ShortcutProps> = (args) => <Shortcut {...args} />;
