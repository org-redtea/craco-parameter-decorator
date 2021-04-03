module.exports.patchPresetReactApp = (presets) => {
  const reactAppPresetPath = require.resolve('babel-preset-react-app');
  const reactAppPreset = presets.find(preset => {
    if (Array.isArray(preset)) {
      const first = preset[0];
      if (first === reactAppPresetPath) {
        return true;
      }
    }
    return false;
  });

  reactAppPreset[0] = '@redtea/craco-parameter-decorator/babel-preset-react-app-override';
}

module.exports.patchPresetTypescript = (opts, presetReactApp) => {
  if (!opts || opts.typescript !== false) {
    const tsPresetModule = require('@babel/preset-typescript').default;
    const tsPreset = presetReactApp.presets.find(preset =>
      Array.isArray(preset) && preset[0] === tsPresetModule
    );

    tsPreset.push({
      onlyRemoveTypeImports: true
    });
  }
}

module.exports.patchProposalDecorators = (presetReactApp) => {
  const proposalDecoratorsModule = require('@babel/plugin-proposal-decorators').default;
  const proposalDecoratorsPlugin = presetReactApp.plugins.find(plugin => {
    if (Array.isArray(plugin)) {
      const first = plugin[0];
      if (first === proposalDecoratorsModule) {
        return true;
      }
    }
    return false;
  });

  proposalDecoratorsPlugin[1] = {legacy: true};
}
