type Plugin = {
  overrideWebpackConfig: ((...args: any[]) => any);
}

declare const plugin: Plugin;

export default plugin;
