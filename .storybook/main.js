/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
  storySort: {
    method: "alphabetical",
    order: [
      "Button",
      "SmallVote",
      "SmallSubmit",
      "Large",
      "Long",
      "TextInput",
      "Card",
      "CardGroup",
      "*",
    ],
  },
};
export default config;
