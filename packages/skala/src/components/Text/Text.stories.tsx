import { Meta, ComponentStory } from "@storybook/react";
import { Text, TextProps } from "./";

export default {
  title: "Primitives/Text",
  compoenet: Text,
  args: {
    children: "Test",
  },
} as Meta<TextProps>;

export const Empty: ComponentStory<typeof Text> = (args) => <Text {...args} />;
