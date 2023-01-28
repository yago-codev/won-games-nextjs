module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack4"
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
