const { getLoader, loaderByName } = require("@craco/craco");
const patchers = require('./patchers');

module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    const { isFound, match } = getLoader(webpackConfig, loaderByName("babel-loader"));

    if(isFound){
      const {plugins, presets} = match.loader.options;

      patchers.patchPresetReactApp(presets);
      plugins.push('babel-plugin-transform-typescript-metadata');
      plugins.push('babel-plugin-parameter-decorator');
    }

    return webpackConfig
  }
};
