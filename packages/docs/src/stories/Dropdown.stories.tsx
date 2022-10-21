import { StoryObj, Meta } from '@storybook/react';
import { Dropdown, DropdownProps } from '@skala/react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown.Menu,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=48%3A8385',
    },
  },
  args: {
    children: (
      <>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
      </>
    ),
    trigger: <button>click me</button>,
  },
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {};
export const WithSlot: StoryObj<DropdownProps> = {
  args: {
    children: (
      <>
        <Dropdown.Item>
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
      </>
    ),
  },
};
export const ItemDisabled: StoryObj<DropdownProps> = {
  args: {
    children: (
      <>
        <Dropdown.Item disabled>
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="/">
            Settings <Dropdown.RightSlot>⌘ S</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
      </>
    ),
  },
};
