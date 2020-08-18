module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  runtimeCompiler: true,
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "PGMJ"
      },
      chainWebpackRendererProcess: config => {
        config.plugin("define").tap(args => {
          args[0]["IS_ELECTRON"] = true;
          return args;
        });
      },
      disableMainProcessTypescript: false,
      mainProcessTypeChecking: false,
      mainProcessFile: "./src/electron/background.ts"
    }
  }
};
