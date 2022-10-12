import React from "react";
import { globalStyles } from "../stitches.config";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      {globalStyles()}
      <Story />
    </div>
  ),
];
