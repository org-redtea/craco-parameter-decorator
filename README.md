# @redtea/craco-parameter-decorator

This [craco](https://github.com/gsoft-inc/craco) plugin will set up [babel-plugin-parameter-decorator](https://github.com/WarnerHooh/babel-plugin-parameter-decorator) for your project.

Support:
 - create-react-app: 3.x, 4.x
 - craco: 5.x, 6.x

# :hammer_and_wrench: Installation

Yarn

```bash
$ yarn add -E @redtea/craco-parameter-decorator
```

NPM

```bash
$ npm install -E @redtea/craco-parameter-decorator
```

# :open_book: Usage

Add the plugin to your craco config. For example:
```javascript
const ParameterDecoratorPlugin = require("@redtea/craco-parameter-decorator");

module.exports = {
  plugins: [{ plugin: ParameterDecoratorPlugin }],
};
```
