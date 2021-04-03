const patchers = require('./patchers');

module.exports = (api, opts) => {
  const preset = require('babel-preset-react-app')(api, opts);

  patchers.patchPresetTypescript(opts, preset);
  patchers.patchProposalDecorators(preset);

  return preset;
}
