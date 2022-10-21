import { Story, Meta } from '@storybook/react';
import { Grid, Icon, IconProps, iconPath, Text, Stack } from '@skala/react';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=12%3A2786',
    },
  },
  args: {
    name: 'plus',
    color: 'subtext',
    label: 'add',
    size: 'md',
  },
} as Meta<IconProps>;

const icons = Object.keys(iconPath);

export const IconSet: Story<IconProps> = (args) => (
  <Grid
    flow="row-dense"
    cols="6"
    align="stretch"
    justify="between"
    gap="3"
    css={{ w: '$full', p: '$4' }}
  >
    {icons.map((icon) => (
      <Stack
        key={icon}
        direction="column"
        align="center"
        gap="2"
        css={{
          bg: '$surface-base-subdued',
          p: '$2',
          borderRadius: '$sm',
        }}
      >
        <Icon {...args} name={icon} />
        <Text
          as="p"
          size="xs"
          color="caption"
          css={{ bg: '$surface-base-default', w: '100%', textAlign: 'center' }}
        >
          {icon}
        </Text>
      </Stack>
    ))}
  </Grid>
);
