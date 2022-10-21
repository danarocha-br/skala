import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps, Stack } from '@skala/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    username: 'Joe Smith',
    size: 'md',
    variant: 'circle',
    imageURL: 'https://source.unsplash.com/ew_Ou6oiQ2c',
    imageALT: 'user avatar',
    loading: false,
    showUsername: false,
  },
} as Meta<AvatarProps>;

export const Sizes: Story<AvatarProps> = (args) => (
  <Stack gap="8" align="center">
    <Avatar {...args} />
    <Avatar {...args} size="lg" />
  </Stack>
);

export const WithFallback = Sizes.bind({});
WithFallback.args = {
  imageURL: undefined,
};

export const Square = Sizes.bind({});
Square.args = {
  variant: 'square',
  imageURL: undefined,
};

export const WithUsername = Sizes.bind({});
WithUsername.args = {
  imageURL: undefined,
  showUsername: true,
};
